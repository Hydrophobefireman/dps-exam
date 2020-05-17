import {
  Router,
  AsyncComponent,
  absolutePath,
  redirect,
  h,
} from "@hydrophobefireman/ui-lib";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";

import { LoadingDefaultComponent } from "./FallbackComponents";

const componentMap = {
  "/": () => import("./components/Landing/Landing").then(getDefault),
  "/profile": () => import("./components/Profile/Profile").then(getDefault),
  "/exam": () => import("./components/Exam/Exam").then(getDefault),
  "/admin": () => import("./components/Admin/Admin").then(getDefault),
  "/report": () => import("./components/Report/Report").then(getDefault),
};

const getDefault = (module_) => module_.default;

const getRouteChild = (path, promise) => {
  const RouteChild = () =>
    h(
      "section",
      {
        "data-application-state": path,
      },
      h(AsyncComponent, {
        componentPromise: promise,
        fallbackComponent: LoadingDefaultComponent,
      })
    );

  return h(RouteChild, {
    path: absolutePath(path),
  });
};

export function ComponentLoader(props) {
  return h(
    "main",
    {
      class: "router-app",
    },
    h(
      "div",
      {
        class: "router-parent",
      },
      h(
        Router,
        null,
        entries(componentMap).map(([path, promise]) =>
          getRouteChild(path, promise)
        )
      )
    )
  );
}
