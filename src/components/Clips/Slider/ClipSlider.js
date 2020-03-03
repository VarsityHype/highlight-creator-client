import React, {useState, useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { convert, toSeconds, format, msToTime } from "../../../utils/helpers";

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

function valuetext(value) {
  return `${value}°C`;
}

const ClipSlider = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState([0, 0]);
    const duration = props.duration
    const displayedDuration = duration.toFixed(2)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        const number = 300000000
        // const ok = convert(number)
        const ok2 = msToTime(number)
        console.log(ok2)
        setValue([0, duration])
        console.log(displayedDuration)
    }, [])

    return (
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          Temperature range
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={0}
          max={displayedDuration}
        />
        <h5>Time: {msToTime(value[1])} / {msToTime(displayedDuration)}</h5>
      </div>
    );

}

export default ClipSlider