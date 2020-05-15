import FakeSet from "@hydrophobefireman/j-utils/@build-modern/src/modules/es6/loose/Set";
/** @type {import("./store").Store} */
const STORE = {
  userData: null,
  examBeginTimeStamp: null,
  $fetchedStringData: {},
};

Object.defineProperty(STORE, "isLoggedIn", {
  get: () => !!(STORE.userData && STORE.userData.scholar),
});
Object.defineProperty(STORE, "examBegan", {
  get: () =>
    STORE.examBeginTimeStamp
      ? STORE.examBeginTimeStamp - +new Date() < 0
      : false,
  set: (e) => e,
});
const subscriptions = new FakeSet();
export const appEvents = {
  subscribe(fn) {
    subscriptions.add(fn);
  },

  /**
   *
   * @param {keyof import("./store").Store} type
   * @param {*} data
   */
  set(type, data) {
    STORE[type] = data;
    subscriptions.forEach((x) => x(type, data, STORE));
  },
  unsubscribe(fn) {
    subscriptions.delete(fn);
  },
  getStore() {
    return STORE;
  },
  getStrings() {
    return STORE.$fetchedStringData;
  },
};
