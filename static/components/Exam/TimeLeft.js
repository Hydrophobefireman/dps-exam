import { Component } from "@hydrophobefireman/ui-lib";

export default class TimeLeft extends Component {
  tFix = (t) => {
    t = "" + t;
    return (t.length === 1 ? "0" : "") + t;
  };
  parseTime() {
    const ps = this.props;
    const curr = +new Date();
    const timeLeft = ps.timeLeft - (curr - ps.prevTime) / 1000;

    let _left;

    const inSeconds = timeLeft;

    const secInAnHour = 3600;

    const minInHour = 60;

    const secInAMin = 60;

    const hours = Math.floor(inSeconds / secInAnHour);
    _left = inSeconds % secInAnHour;

    const mins = Math.floor(_left / minInHour);

    _left = Math.round(_left % secInAMin);

    const sec = _left;
    this.props.setTimeLeft(timeLeft, curr);
    this.setState({ hours, mins, sec });
  }

  __startTicks = () => this.parseTime();
  componentDidUpdate() {
    const { hours, mins, sec } = this.state;
    if (
      (hours === 0 && mins === 0 && sec === 0) ||
      [hours, mins, sec].some((x) => x < 0)
    ) {
      clearInterval(this.___interval);
      return this.props.timeOver();
    }
  }
  componentDidMount() {
    this.___interval = setInterval(this.__startTicks, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.___interval);
  }
  render(_, state) {
    const tFix = this.tFix;
    if (!("hours" in state && "mins" in state && "sec" in state)) return "";

    const { hours, mins, sec } = state;
    if ([hours, mins, sec].some((x) => x < 0)) return "";
    return `${tFix(hours)}:${tFix(mins)}:${tFix(sec)}`;
  }
}
