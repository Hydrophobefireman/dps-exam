export const devHost = "http://localhost:5000";
export const prodHost = "https://dps-exam.herokuapp.com";
export const devMode = location.hostname.includes("localhost");
export const host = devMode ? devHost : prodHost;

function apiURL(url) {
  const u = new URL(url, host);
  return u.href;
}

export const user = {
  authenticate: apiURL("/api/auth/login"),

  getUserDetails: apiURL("/api/auth/get-status"),

  logout: apiURL("/api/logout"),
};
export const exam = {
  getSubjectInfo: apiURL("/api/exam/get-subject-info"),

  startTest: apiURL("/api/exam/start-test"),

  gradeTest: apiURL("/api/exam/grade-test"),
  quickSave: apiURL("/api/exam/quicksave"),
};
