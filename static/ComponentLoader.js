import {
  Router,
  AsyncComponent,
  absolutePath,
  h,
  Path,
} from "@hydrophobefireman/ui-lib";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";

import { LoadingDefaultComponent } from "./FallbackComponents";

const componentMap = {
  "/": () => import("./components/Landing/Landing").then(getDefault),
  "/profile": () => import("./components/Profile/Profile").then(getDefault),
  "/exam/:sub": () => import("./components/Exam/Exam").then(getDefault),
  "/admin": () => import("./components/Admin/Admin").then(getDefault),
  "/report/:sub": () => import("./components/Report/Report").then(getDefault),
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
  return <Path match={path} component={RouteChild} />;
  // return h(Path, {
  //   match: absolutePath(path),
  //   component: RouteChild,
  // });
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
