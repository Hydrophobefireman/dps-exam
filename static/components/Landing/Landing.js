import { h, redirect } from "@hydrophobefireman/ui-lib";
import { ErrorPopup } from "../common";
import { handler } from "../../authHandler";
import { appEvents } from "../../globalStore";
import urlencode from "@hydrophobefireman/j-utils/@build-modern/src/modules/urlencode";
import AuthStateSensitiveComponent from "../_AuthStateSensitiveComponent";
import Logo from "../../dps.jpg";

const store = appEvents.getStore();

export default class Landing extends AuthStateSensitiveComponent {
  state = {
    name: "",
    scholar: null,
    dob: null,
    isFetching: false,
    error: null,
  };
  componentDidUpdate() {
    if (store.isLoggedIn)
      return redirect("/profile?" + urlencode({ n: store.userData.name }));
  }
  componentDidMount = this.componentDidUpdate;

  onInputScholarNumber = (e) =>
    this.setState((ps) => {
      let val = (e.target.value || "").trim();

      if (!val) {
        val = "";
      } else {
        val = +val || ps.scholar;
      }

      return { scholar: val };
    });
  onInputDob = (e) => this.setState({ dob: (e.target.value || "").trim() });
  _fetchDetails = async () => {
    if (this.state.isFetching) return;

    this.setState({ isFetching: true });

    const ret = await handler.auth({
      scholar: this.state.scholar,
      dob: this.state.dob,
    });

    if (ret.error)
      return this.setState({ error: ret.error, isFetching: false });

    const userData = ret.user_data;

    appEvents.set("userData", userData);

    this.setState({ isFetching: false });
  };
  _resetError = () => this.setState({ error: null });
  render(props, state) {
    return h(
      "div",
      { style: { "margin-top": "2rem" } },
      h("div", { style: "text-align:center" }, h("img", { src: Logo })),
      h(
        "div",
        { class: "landing-component" },
        h(
          "div",
          { style: { width: "95%", margin: "auto" } },
          h("div", { class: "anim-hi" }, "Welcome"),
          h(
            "form",
            { action: "javascript:", onSubmit: this._fetchDetails },
            h("div", null, "Enter your details"),
            h("input", {
              class: "form-inx",
              placeholder: "Scholar No.",
              value: state.scholar || "",
              onInput: this.onInputScholarNumber,
            }),
            h("input", {
              class: "form-inx",
              placeholder: "Date of Birth (DD-MM-YYYY)",
              onInput: this.onInputDob,
            }),
            !!(state.scholar && state.dob) &&
              h("button", { class: "submit-prof hoverable" }, "Login"),
            state.isFetching && h("div", null, "Checking your details")
          ),
          state.error &&
            h(ErrorPopup, {
              errorHead: "Can't login",
              reasons: [state.error],
              close: this._resetError,
            })
        )
      )
    );
  }
}
