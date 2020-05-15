import { postJSONRequest, getRequest, UNKNOWN_ERROR } from "../http/requests";
import { appEvents } from "../globalStore/index";
import { user } from "../apiRoutes";

class Authy {
  state = { checkedAuth: false };

  async auth(props) {
    const resp = await postJSONRequest(user.authenticate, props);
    if (resp.error != null) {
      return resp;
    }
    appEvents.set("userData", resp.user_data);
    this.state.checkedAuth = true;
    return resp;
  }

  async checkAuth() {
    let isLoggedIn = appEvents.getStore().isLoggedIn;

    if (this.state.checkedAuth || isLoggedIn) {
      this.state.checkedAuth = true;

      return isLoggedIn;
    }

    this.state.checkedAuth = true;

    const f = await getRequest(user.getUserDetails);

    if (!f.error && f.user_data) {
      appEvents.set("userData", f.user_data);

      return f;
    }
    if (f.error === UNKNOWN_ERROR) throw Error("");
    return false;
  }
  logout() {
    appEvents.set("userData", null);

    return postJSONRequest(user.logout, {});
  }
}

export const handler = new Authy();
