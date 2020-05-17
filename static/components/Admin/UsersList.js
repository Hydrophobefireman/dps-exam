import { Component, h } from "@hydrophobefireman/ui-lib";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";
import { Popup } from "../common";
import { appEvents } from "../../globalStore";
import { postJSONRequest } from "../../http/requests";
import { user } from "../../apiRoutes";

const strings = appEvents.getStrings();

const callback =
  window.requestAnimationFrame ||
  (window.Promise && Promise.prototype.then.bind(Promise.resolve())) ||
  setTimeout;

const sanitizeRegExp = /\s/g;
const clean = (x) => (x + "").replace(sanitizeRegExp, "").toLowerCase();
const contains = (a, b) => clean(a).includes(clean(b));

export class UsersList extends Component {
  state = { showCount: 100, value: "" };
  increment = () => this.setState((ps) => ({ showCount: ps.showCount + 100 }));

  applyFilter(data) {
    const filterBy = (this.state.value || "").trim();
    if (!filterBy && !this.state.filterGrade) return data;
    return data.filter((x) => {
      if (this.state.filterGrade && x.grade !== this.state.filterGrade) {
        return false;
      }
      const { scholar, name } = x;
      return contains(scholar, filterBy) || contains(name, filterBy);
    });
  }
  setFilter = (e) => {
    const value = e.target.value;
    callback(() => this.setState({ value, showCount: 100 }));
  };
  expandStudentDetails = (e) =>
    this.setState((ps) => {
      const expandScholar = ps.expandScholar;
      const curr = +e.target.dataset.student_scholar;
      return { expandScholar: expandScholar === curr ? -1 : curr };
    });

  resetScores = (scholar, subject) => () => {
    if (this.state.isResetting) return;
    this.setState({ isResetting: true });
    postJSONRequest(user.resetSubject, {
      token: this.props.token,
      scholar,
      subject,
    }).then((data) =>
      this.setState({
        data,
        value: "",
        expandScholar: null,
        isResetting: false,
      })
    );
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  _applyGradeFilter = (e) =>
    this.setState((ps) => {
      let val = +e.target.dataset.class;
      if (val === ps.filterGrade) val = null;
      return { filterGrade: +val, showCount: 100 };
    });
  getStudents() {
    const data = this.state.data;
    if (!data) return;
    const filteredData = this.applyFilter(data);
    const maxLen = Math.min(this.state.showCount, filteredData.length);
    const ret = Array(maxLen);
    const expandScholar = this.state.expandScholar;
    for (let i = 0; i < maxLen; i++) {
      const student = filteredData[i];
      ret[i] = h(
        "div",
        null,
        h(
          "div",
          {
            onClick: this.expandStudentDetails,
            class: "student-item",
            "data-student_scholar": student.scholar,
            // "data-filtered_index": i,
          },
          h("div", { class: "schlr" }, student.scholar),
          h("div", { class: "student-name" }, filteredData[i].name),

          h("div", { class: "more-info" })
        ),
        expandScholar === student.scholar &&
          h(StudentDetailsEditor, {
            student,
            index: i,
            shouldExpand: true,
            resetScores: this.resetScores,
          })
      );
    }

    return ret;
  }
  render(props, state) {
    return h(
      "div",
      null,
      h("input", {
        class: "form-inx",
        placeholder: "Search",
        onInput: this.setFilter,
        value: state.value,
      }),
      h(
        "div",
        { class: "filter-by-class" },
        h(
          "button",
          {
            class: "filter-button hoverable",
            "data-class": 10,
            onClick: this._applyGradeFilter,
          },
          "Class 10"
        ),
        h(
          "button",
          {
            class: "filter-button hoverable",
            "data-class": 12,
            onClick: this._applyGradeFilter,
          },
          "Class 12"
        )
      ),
      h(
        "div",
        null,
        "Currently showing ",
        state.filterGrade ? "Class " + state.filterGrade : "All",
        " students"
      ),
      h("div", null, this.getStudents()),
      state.data &&
        state.showCount < state.data.length &&
        h(
          "button",
          { class: "show-more hoverable", onClick: this.increment },
          "Load More"
        )
    );
  }
}

class StudentDetailsEditor extends Component {
  state = {
    waitingForResetConfirmation: false,
    subjectReset: null,
  };
  _confirmReset = (e) =>
    this.setState({
      waitingForResetConfirmation: true,
      subjectReset: e.target.dataset.subject,
    });
  _cancel = this.setState({
    waitingForResetConfirmation: false,
    subjectReset: null,
  });
  render(props, state) {
    const student = props.student;
    if (state.waitingForResetConfirmation)
      return h(Popup, {
        cancel: this._cancel,
        title: "Are you sure?",
        errorHead: strings.Admin$AboutToExecuteReset(
          student.name,
          student.scholar,
          state.subjectReset
        ),
        close: this.props.resetScores(student.scholar, state.subjectReset),
      });
    return h(
      "div",
      {
        // onClick: window.stopPropagation,
        class: "student-details" + (props.shouldExpand ? " show-data" : ""),
      },
      h(
        "div",
        { class: "student-details-table-like" },
        h(
          "div",
          { class: "info-field" },
          h("div", { class: "bold" }, "Class"),
          h("span"),
          h("div", null, student.grade)
        ),
        h("div", { style: { fontWeight: "bold" } }, "Results:"),
        entries(student.testing_info || {}).map(([x, y]) =>
          h(
            "div",
            { class: "info-field" },
            h("div", { class: "bold" }, x),
            h("div", null, y.score),
            h(
              "div",
              {
                onClick: this._confirmReset,
                class: "reset-score hoverable",
                "data-subject": x,
              },
              "Reset"
            )
          )
        )
      )
    );
  }
}
