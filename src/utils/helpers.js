const precision = 100;

export function convert(val) {
  console.log(val)
  return Math.round(val * precision);
}

export function toSeconds(val) {
  if (val === 0) {
    return 0;
  }

  return val / precision;
}

export function format(val) {
  return toSeconds(val).toFixed(2);
}

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
// export function msToTime(millisec) {
//   // var milliseconds = parseInt((duration % 1000) / 100),
//   //   seconds = Math.floor((duration / 1000) % 60),
//   //   minutes = Math.floor((duration / (1000 * 60)) % 60),
//   //   hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
//   // var milliseconds = millisec.toFixed(2)
//   var convertToMillisec = (millisec * 1000)
//    var seconds = (convertToMillisec / 1000).toFixed(0);

//    var minutes = (convertToMillisec / (1000 * 60)).toFixed(0)

//    var hours = (convertToMillisec / (1000 * 60 * 60)).toFixed(0)

//    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0)
//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   return hours + ":" + minutes + ":" + seconds;

//    if (seconds < 60) {
//       return "0" + ":" + seconds + "." + millisec;
//    } else if (minutes < 60) {
//       return minutes + ":" + seconds + "." + millisec;
//    } else if (hours < 24) { 
//       return hours + ":" + minutes + ":" + seconds + "." + millisec;
//    } else {
//      return days + " Days";
//    }
// }
