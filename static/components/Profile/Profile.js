import { Component, redirect, h, loadURL } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { exam, user } from "../../apiRoutes";
import { getRequest, postJSONRequest } from "../../http/requests";
import { toHours } from "../common";

const store = appEvents.getStore();
const strings = appEvents.getStrings();

export default class Profile extends Component {
  componentDidMount() {
    if (!store.isLoggedIn) return redirect("/");
    getRequest(exam.getSubjectInfo).then((_) => {
      const x = _.subjects;

      this.setState({
        subjectInfo: x,

        // nextPaper: closest,
      });
    });
  }

  _logout = () =>
    postJSONRequest(user.logout, {}).then(() => {
      appEvents.set("userData", null);
      redirect("/");
    });
  render(_, state) {
    if (!store.userData) return strings.Loading$Default;
    return h(
      "div",
      null,
      h(
        "div",
        null,
        strings.Profile$ClassOf,
        " '",
        store.userData.grade === 10 ? "23" : "21"
      ),
      h(
        "div",
        { class: "prof-data-box" },
        ["name", "grade", "scholar"].map((x) =>
          h(ProfileInfoField, { x, data: store.userData[x] })
        )
      ),
      h(
        "div",
        null,
        h("div", { class: "your-subjects" }, strings.Profile$YourSubjects),
        h(
          "div",
          { class: "subject-info help-box" },
          ["subject", "paper date", "duration", "status"].map((x) =>
            h("div", { class: "subject-child bold" }, x)
          )
        ),
        h(SubjectInfo, {
          arr: state.subjectInfo || store.userData.subject_info,
        }),
        h(
          "button",
          {
            onClick: this._logout,
            class: "submit-exam hoverable",
            style: { marginTop: "30px" },
          },
          strings.Logout$logout
        )
      )
    );
  }
}

function ProfileInfoField(props) {
  const { x, data } = props;
  return h(
    "div",
    { class: "prof-container" },
    h("div", { class: "prof-field" }, x),
    h("div", null, data)
  );
}

const _comp = (a, b) => (a > b ? 1 : b > a ? -1 : 0);

const sortBy = (a, b) =>
  a.paper_time && b.paper_time
    ? _comp(a.paper_time, b.paper_time)
    : _comp(a, b);

const placeHolder = h("div", { class: "subject-child place-holder" });
function SubjectInfo(props) {
  const arr = props.arr;
  return h(
    "div",
    { class: "subject-info-container" },
    (arr || []).sort(sortBy).map((x) =>
      h(
        "div",
        { class: "subject-info" },
        h("div", { class: "subject-child" }, x.subject || placeHolder),
        h(
          "div",
          { class: "subject-child" },
          x.paper_time ? h(TimeFormatter, { ts: x.paper_time }) : placeHolder
        ),
        h(
          "div",
          { class: "subject-child" },
          x.paper_time ? toHours(x.time_allotted) : placeHolder
        ),

        h("div", { class: "subject-child" }, getTestInfo(x))
      )
    )
  );
}
const loadNextExam = (e) => loadURL(`/exam?sub=${e.target.dataset.subject}`);

function getTestInfo(x) {
  const sub = x.subject || x;

  const testInfo = (store.userData.testing_info || {})[sub];

  if (x.subject && testInfo && testInfo.score != null)
    return h("span", { class: "bold" }, "Score " + (testInfo.score || 0));

  return h(
    "div",
    null,
    h(
      "button",
      {
        class: "next-exam hoverable",
        onClick: x.subject ? loadNextExam : null,
        "data-subject": sub,
      },
      x.subject ? strings.Exam$Begin : strings.Loading$Default
    )
  );
}

function TimeFormatter(props) {
  const ts = new Date(props.ts * 1000);
  // ts.setHours(10, 0, 0);
  return stampFormat(ts);
}

function isSameDay(c, d) {
  return (
    c.getFullYear() === d.getFullYear() &&
    c.getMonth() === d.getMonth() &&
    c.getDate() === d.getDate()
  );
}
const options = {
  hour: "numeric",
  hour12: true,
  minute: "numeric",
  // second: "numeric",
};
const hasIntl = typeof Intl !== "undefined";
export function stampFormat(timeStamp) {
  const ts = new Date(timeStamp);
  try {
    if (hasIntl) {
      const date = new Date();
      if (ts.getFullYear() !== date.getFullYear()) {
        options.year = "numeric";
      }
      if (!isSameDay(ts, date)) {
        options.month = options.day = "numeric";
      }
      return Intl.DateTimeFormat("en-in", options).format(ts).toUpperCase();
    }
  } catch (e) {
    return console.log(e);
  }
  return ts.toLocaleString();
}
