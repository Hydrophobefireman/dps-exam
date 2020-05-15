import { h } from "@hydrophobefireman/ui-lib";
import { RichStringParser } from "./RichStringParser";

const indexOptionMap = { 0: "A", 1: "B", 2: "C", 3: "D" };

const getStringConvertor = (k) =>
  typeof k === "object" ? h(RichStringParser, { data: k }) : String(k);

export default function Question(props) {
  const { x, i, setOption, answered } = props;
  return h(
    "div",
    { class: "question-body" },
    h(
      "div",
      { class: "question-text" },
      "Q.",
      i + 1,
      h("span", { class: "q-main" }, getStringConvertor(x.question))
    ),
    h(Options, {
      options: x.options,
      onClick: setOption,
      questionIndex: i,
      answered,
    })
  );
}

function Options(props) {
  return h(
    "div",
    null,
    props.options.map((option, idx) => {
      return h(
        "div",
        { class: "option-box" },
        h("span", { class: "readable-name" }, indexOptionMap[idx]),
        h(
          "div",
          {
            onClick: props.onClick,
            class:
              "question-choice" + (idx === props.answered ? " selected" : ""),
            "data-option_index": idx,
            "data-question_index": props.questionIndex,
          },
          getStringConvertor(option)
        )
      );
    })
  );
}
