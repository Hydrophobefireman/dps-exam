import { render, h, AsyncComponent } from "@hydrophobefireman/ui-lib";
import assign from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/assign";

import { ComponentLoader } from "./ComponentLoader";
import { appEvents } from "./globalStore";
import { handler } from "./authHandler";
import { strings } from "./strings-en";
import { LoadingDefaultComponent, UnexpectedError } from "./FallbackComponents";

import "./App.css";
import "./components/Landing/Landing.css";
import "./components/Profile/Profile.css";
import "./components/Exam/Exam.css";
import "./components/Admin/Admin.css";

const store = appEvents.getStore();
assign(store.$fetchedStringData, strings);
appEvents.set("$fetchedStringData", store.$fetchedStringData);

function App() {
  return h(ComponentLoader);
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
