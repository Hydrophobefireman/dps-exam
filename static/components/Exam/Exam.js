import {
  Component,
  Router,
  redirect,
  h,
  Fragment,
} from "@hydrophobefireman/ui-lib";
import { postJSONRequest } from "../../http/requests";
import { exam } from "../../apiRoutes";
import { appEvents } from "../../globalStore";
import { centerTextCSS } from "../../FallbackComponents";
import { toHours, Popup, ErrorPopup } from "../common";
import Question from "./Question";
import TimeLeft from "./TimeLeft";

const store = appEvents.getStore();

export default class Exam extends Component {
  state = {
    isFetching: false,

    questions: null,

    answers: null,

    timeOver: false,
  };
  timeOver = () => {
    this.setState({
      timeOver: true,
      forceSubmit: true,
      answers: this.state.answers.slice().map((x) => (x == null ? -1 : x)),
    });
  };
  timeLeft = (timeLeft, prevTime) => this.setState({ timeLeft, prevTime });
  _submit = () => {
    if (this.state.results || this.state.awaitingScore) return;

    const answers = this.state.answers;

    const scholar = store.userData.scholar;

    const subject = this.state.questions.subject;

    if (!this.state.forceSubmit) {
      const unanswered = [];

      answers.forEach((x, i) => x == null && unanswered.push(i + 1));

      if (unanswered.length) {
        return this.setState({ $AnswerError: unanswered.join(", ") });
      }
    }

    this.setState({ awaitingScore: true });

    postJSONRequest(exam.gradeTest, {
      scholar,

      subject,

      answers,
    }).then((data) => {
      if (data.error)
        return this.setState({
          error: data.error,
          awaitingScore: false,
          timeOver: false,
        });
      appEvents.set("userData", data.user_data);
      this.setState({ results: data, awaitingScore: false, timeOver: false });
    });
  };

  _answerQuestion = (e) => {
    const dataSet = e.target.dataset;

    const questionIndex = +dataSet.question_index;

    let optionIndex = +dataSet.option_index;

    if (this.state.answers[questionIndex] === optionIndex) {
      optionIndex = null;
    }
    const answers = this.state.answers.slice();

    answers[questionIndex] = optionIndex;
    postJSONRequest(exam.quickSave, {
      subject: this.state.questions.subject,
      answers,
    });
    this.setState({ answers });
  };
  componentDidUpdate() {
    if (this.state.timeOver && !this.state.awaitingScore && !this.state.results)
      this._submit();
  }

  componentDidMount() {
    if (!store.isLoggedIn) return redirect("/");

    const qs = new URLSearchParams(Router.getQs).get("sub");

    if (!qs) return this.setState({ error: "Invalid Exam" });

    this.setState({ isFetching: true });

    postJSONRequest(exam.startTest, {
      scholar: store.userData.scholar,

      subject: qs.trim(),
    }).then((questions) => {
      if (questions.error)
        return this.setState({ error: questions.error, isFetching: false });
      let $ = questions.previous_answers || [];
      let prev;
      if ($.length && $.some((x) => x != null)) {
        prev = $;
      }
      this.setState({
        questions,
        isFetching: false,
        prevTime: +new Date(),
        answers: prev || Array(questions.question_data.length).fill(null),
        timeLeft:
          questions.time_allotted - (questions.now - questions.start_time),
      });
    });
  }

  _closePopup = () => this.setState({ timeOver: false });

  _clearError = () => this.setState({ $AnswerError: null });

  __closeTest = () => redirect("/");

  render(_, state) {
    if (state.error)
      return h(ErrorPopup, { reasons: [state.error], close: this.__closeTest });

    if (state.$AnswerError)
      return h(Popup, {
        close: this._clearError,

        title: "Unanswered Questions Left",

        errorHead:
          "There is no negative marking. Please answer the following questions",

        reasons: [state.$AnswerError],
      });

    if (state.isFetching)
      return h("div", { style: centerTextCSS }, "Loading questions");

    if (state.timeOver)
      return h(Popup, {
        close: this._closePopup,

        title: "Time up",

        errorHead: "Your answers are being submitted",
      });

    if (state.awaitingScore) {
      return h("div", { style: centerTextCSS }, "Calculating your score");
    }

    if (state.results) {
      return h(Popup, {
        close: this.__closeTest,

        title: "Results",

        errorHead: h(
          Fragment,

          null,

          h("div", null, "Maximum Marks: " + state.results.total),

          h("div", null, "Your score: ")
        ),

        reasons: [state.results.score],
      });
    }

    return (
      state.questions &&
      h(
        "div",
        null,
        h(
          "div",

          { class: "exam-header" },
          "class ",
          state.questions.grade,
          " - ",
          state.questions.subject,
          " test"
        ),
        h(
          "div",
          { class: "total-time" },

          "Time allotted - ",

          h("span", { class: "bold" }, toHours(state.questions.time_allotted))
        ),

        h(
          "span",

          { class: "t-left" },

          "Time Left - ",

          h(TimeLeft, {
            timeOver: this.timeOver,
            setTimeLeft: this.timeLeft,
            timeLeft: state.timeLeft,
            prevTime: state.prevTime,
          })
        ),

        h(
          "div",

          { class: "questions-container" },

          state.questions.question_data.map((x, i) =>
            h(Question, {
              x,
              i,
              setOption: state.timeOver ? null : this._answerQuestion,
              answered: state.answers[i],
            })
          )
        ),
        h(
          "button",
          { class: "submit-exam hoverable", onClick: this._submit },
          "Submit"
        )
      )
    );
  }
}
