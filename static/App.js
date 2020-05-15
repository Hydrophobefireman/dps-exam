import {
  render,
  h,
  AsyncComponent,
  redirect,
  Component,
  Router,
} from "@hydrophobefireman/ui-lib";
import { ComponentLoader } from "./ComponentLoader";
import { appEvents } from "./globalStore";
import { handler } from "./authHandler";
import { LoadingDefaultComponent, UnexpectedError } from "./FallbackComponents";
import { strings } from "./strings-en";

import "./App.css";
import "./components/Landing/Landing.css";
import "./components/Profile/Profile.css";
import "./components/Exam/Exam.css";

const store = appEvents.getStore();
appEvents.set("$fetchedStringData", strings);

class App extends Component {
  componentDidMount() {
    const qs = Router.getQs;
    let c;

    if ((c = new URLSearchParams(qs).get("__loader"))) {
      redirect(c);
      return;
    }
  }
  render() {
    return h(ComponentLoader);
  }
}

async function fetchUserData() {
  const ret = App;
  if (store.isLoggedIn) return ret;
  try {
    await handler.checkAuth();
  } catch (e) {
    console.log(e);
    return UnexpectedError;
  }
  return ret;
}

const LoadApp = () =>
  h(AsyncComponent, {
    componentPromise: fetchUserData,
    fallbackComponent: LoadingDefaultComponent,
  });

render(h(LoadApp), document.getElementById("app-mount"));
