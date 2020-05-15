import { appEvents } from "./globalStore";
const strings = appEvents.getStrings();
export const centerTextCSS = {
  margin: "auto",
  textAlign: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export function UnexpectedError() {
  return <div style={centerTextCSS}>{strings.Error$BodyText}</div>;
}
export function LoadingDefaultComponent() {
  return <div style={centerTextCSS}>{strings.Loading$Default}</div>;
}
