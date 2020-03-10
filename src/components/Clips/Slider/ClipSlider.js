import React, {useState, useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { msToTime } from "../../../utils/helpers";
import "../../../css/Clip.css";

const color = {
  color: "#f69953"
}
const useStyles = makeStyles({
  // root: {
  //   width: 300
  // }
});

const ClipSlider = (props) => {
    const classes = useStyles();
    const duration = props.duration
    const displayedDuration = duration.toFixed(0)
    const [value, setValue] = useState([0, 0]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleTrim = () => {
      let start = value[0]
      let end = value[1]
      props.handleTrim(start, end)
    }

    const handleClipTitle = (e) => {
      let clipTitle = e.target.value
      props.handleClipTitle(clipTitle)
    }
    
    const handleSliderClipSubmit = () => {
      let start = value[0]
      let end = value[1]
      props.handleSliderClip(start, end);
    };

    const handleSave = () => {
      props.handleSave()
    }

    useEffect(() => {
        
        setValue([0, displayedDuration])
        console.log(displayedDuration)
    }, [])

    return (
      <div className={classes.root}>
        <div className="clip-controls-div">
        <Typography id="range-slider" gutterBottom></Typography>
        <Slider
          style = {color}
          value={value}
          onChange={handleChange}
          min={0}
          max={displayedDuration}
        />
        <h5 className="video-time-header">
          Time: {msToTime(value[0])} / {msToTime(value[1])}
        </h5>
          <input
            name="title"
            placeholder="clip title"
            type="text"
            onChange={handleClipTitle}
          />
          <div className="buttons">
          <button 
          onClick={handleTrim}
          className="upload-button"
          >
            Create Clip
            </button>
          
          <button onClick={handleSave}
           className="upload-button">
            Export Clip
            </button>

          </div>
        </div>
      </div>
    );

}

export default ClipSlider