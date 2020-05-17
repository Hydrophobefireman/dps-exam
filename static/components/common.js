import { Component, h, Fragment } from "@hydrophobefireman/ui-lib";
import { appEvents } from "../globalStore";
const strings = appEvents.getStrings();
export function ErrorPopup(props) {
  return h(Popup, { ...props, title: strings.Error$TitleDefault });
}
export function SuccessPopup(props) {
  return h(Popup, { ...props, title: strings.Success$TitleDefault });
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
      h(
        "div",
        { class: "mask", onClick: props.cancel },
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
