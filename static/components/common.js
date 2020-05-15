import { Component, h, Fragment } from "@hydrophobefireman/ui-lib";
export function ErrorPopup(props) {
  return h(Popup, { ...props, title: "An error occured" });
}
export function SuccessPopup(props) {
  return h(Popup, { ...props, title: "Success" });
}
export const sanitizeRegExp = /([^\w]|_)/g;

export class Popup extends Component {
  __id = Math.random();
  componentDidMount() {
    const el = document.getElementById(`${this.__id}`);
    el && el.focus();
  }
  render(props) {
    return h(
      Fragment,
      null,
      h("div", { class: "mask" }),
      h(
        "div",
        { class: "app-popup" },
        h("div", { class: "heading-text clr app-popup-title" }, props.title),
        h("div", null, props.errorHead),
        h(
          "div",
          { class: "err-reasons" },
          h(
            "div",
            null,
            (props.reasons || []).map((x) => h("div", null, x))
          )
        ),
        h(
          "button",
          {
            id: this.__id,
            class: "app-popup-close",
            onClick: props.close,
          },
          "OK"
        )
      )
    );
  }
}
const pluralize = (i, j) => (i === 1 ? j : `${j}s`);
export const toHours = (x) => {
  const hours = Math.floor(x / 3600);

  const left = x % 3600;

  const mins = left / 60;
  const hourText = `${hours > 0 ? `${hours} ${pluralize(hours, "hour")}` : ""}`;
  return `${hourText}${mins > 0 ? ` ${mins} mins` : ""}`;
};
