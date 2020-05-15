import {
  Router,
  AsyncComponent,
  absolutePath,
  redirect,
} from "@hydrophobefireman/ui-lib";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";

import { LoadingDefaultComponent } from "./FallbackComponents";

const getDefault = (module_) => module_.default;

const getRouteChild = (path, promise) => {
  const RouteChild = () => (
    <section data-application-state={path}>
      <AsyncComponent
        componentPromise={promise}
        fallbackComponent={LoadingDefaultComponent}
      />
    </section>
  );

  return <RouteChild path={absolutePath(path)} />;
};

const componentMap = {
  "/": () => import("./components/Landing/Landing").then(getDefault),
  "/profile": () => import("./components/Profile/Profile").then(getDefault),
  "/exam": () => import("./components/Exam/Exam").then(getDefault),
};

export function ComponentLoader(props) {
  return (
    <main class="router-app">
      <div class="router-parent">
        <Router>
          {entries(componentMap).map(([path, promise]) =>
            getRouteChild(path, promise)
          )}
        </Router>
      </div>
    </main>
  );
}
