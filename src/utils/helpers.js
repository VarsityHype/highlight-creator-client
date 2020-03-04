
export function msToTime(duration) {
  var actualmilliseconds = parseInt(duration * 1000)
  var milliseconds = parseInt((actualmilliseconds % 1000) / 10),
    seconds = parseInt((actualmilliseconds / 1000) % 60),
    minutes = parseInt((actualmilliseconds / (1000 * 60)) % 60),
    hours = parseInt((actualmilliseconds / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours == 0) {
    return minutes + ":" + seconds;
  } else {
    return hours + ":" + minutes + ":" + seconds;
  }
}
