import { AsyncComponent, h, Router, redirect } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../../globalStore";
import { exam } from "../../apiRoutes";
import { postJSONRequest } from "../../http/requests";
import { ErrorPopup } from "../common";
import Question from "../Exam/Question";
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
    data.question_data.map((x, i) => h(Question, { x, i }))
  );
}
