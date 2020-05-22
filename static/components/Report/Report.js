import {
  Component,
  AsyncComponent,
  h,
  Router,
  redirect,
} from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { exam } from "../../apiRoutes";
import { postJSONRequest } from "../../http/requests";
import { ErrorPopup } from "../common";
import Question from "../Exam/Question";
import { DOMShot } from "./screenshot";

const strings = appEvents.getStrings();

async function loadAnswers() {
  const q = Router.getCurrentParams("/report/:sub").sub.trim();
  if (!q) return () => "Invalid Subject";
  const req = await postJSONRequest(exam.getReport, { subject: q });
  if (req.error)
    return () =>
      h(ErrorPopup, {
        errorHead: req.error,
        close: () => redirect("/profile"),
      });
  return () => h(TestReport, { data: req });
}

export default function Report() {
  return h(AsyncComponent, {
    componentPromise: loadAnswers,
    fallbackComponent: () => strings.Loading$Default,
  });
}

function TestReport(props) {
  const data = props.data;
  return h(
    "div",
    null,
    h(
      "div",
      { class: "report-component" },
      strings.Report$YourReportFor(data.subject)
    ),
    h("div", null, strings.Exam$YourScore, " - ", data.score),
    h("div", null, strings.Report$CorrectAnswers),
    h(DownloadReport),
    h(
      "div",
      {
        id: "answer-map",
        style: { backgroundColor: "var(--background-color)" },
      },
      data.question_data.map((x, i) => h(Question, { x, i }))
    )
  );
}

class DownloadReport extends Component {
  state = { currentAction: "Download Report" };
  _download = async () => {
    this.setState({ currentAction: "Serializing Page Contents..." });

    const shot = new DOMShot(document.getElementById("answer-map"));
    await shot.screenshot();
    this.setState({ currentAction: "Generating JPG.." });
    const href = await shot.toDataUri("image/jpeg");
    const a = document.createElement("a");
    Object.assign(a, {
      download: `report-${+new Date()}`,
      href,
      // onclick: (e) => setTimeout(() => URL.revokeObjectURL(a.href), 1000),
    }).click();

    // Object.assign(document.createElement("a"), {
    //   download: `report-${+new Date()}.svg`,
    //   href: shot._img.src,
    //   // onclick: (e) => setTimeout(() => URL.revokeObjectURL(a.href), 1000),
    // }).click();
    this.setState({ currentAction: "Download Report" });
  };
  render(_, state) {
    return h(
      "button",
      { class: "dowload-report hoverable", onClick: this._download },
      state.currentAction
    );
  }
}
