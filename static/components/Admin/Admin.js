import { AsyncComponent, h, Component } from "@hydrophobefireman/ui-lib";
import { user } from "../../apiRoutes";
import { appEvents } from "../../globalStore";
import { postJSONRequest } from "../../http/requests";
import { centerTextCSS } from "../../FallbackComponents";
import { UsersList } from "./UsersList";

const strings = appEvents.getStrings();

async function LoadData(token) {
  const req = await postJSONRequest(user.getAllStudents, { token });
  if (req.error) return () => h("div", null, req.error);
  return () => h(UsersList, { data: req, token });
}

export default class AdminComponent extends Component {
  state = {
    value: "",
    submittedToken: false,
  };

  handleSubmit = () => this.setState({ submittedToken: true });

  handleInput = (e) => this.setState({ value: (e.target.value || "").trim() });

  render(_, state) {
    if (this.state.submittedToken) {
      return h(AsyncComponent, {
        componentPromise: () => LoadData(state.value),
        fallbackComponent: () => strings.Loading$Default,
      });
    }
    return h(
      "div",
      { style: { ...centerTextCSS, flexDirection: "column" } },
      h("div", null, "Admin Dashboard"),
      h(
        "form",
        {
          style: { width: "60%" },
          action: "javascript:",
          onSubmit: this.handleSubmit,
        },
        h("input", {
          class: "form-inx",
          value: state.value,
          onInput: this.handleInput,
          placeholder: "Password",
          type: "password",
        }),
        h(
          "div",
          null,

          h(
            "button",
            {
              class: "action-btn",
              style: {
                marginTop: "1rem",
                visibility: state.value ? "visible" : "hidden",
              },
            },
            strings.Login$login
          )
        )
      )
    );
  }
}
