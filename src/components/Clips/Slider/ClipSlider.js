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
    const duration = props.duration
    const displayedDuration = duration.toFixed(1)
    const [value, setValue] = useState([0, 0]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleSliderClipSubmit = () => {
      let start = value[0]
      let end = value[1]
      props.handleSliderClip(start, end);
    };

    useEffect(() => {
        
        setValue([0, displayedDuration])
        console.log(displayedDuration)
    }, [])

    return (
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          // valueLabelDisplay="auto"
          // aria-labelledby="range-slider"
          // getAriaValueText={valuetext}
          min={0}
          max={displayedDuration}
        />
        <h5>Time: {msToTime(value[0])} / {msToTime(value[1])}</h5>
        <button onClick={handleSliderClipSubmit}>Create Clip</button>
      </div>
    );

}

export default ClipSlider