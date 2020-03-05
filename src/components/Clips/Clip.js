import React from "react";
import {connect} from 'react-redux'
import ClipPreview from "./ClipPreview";
import ClipsGallery from "./ClipsGallery";
import ClipSlider from "./Slider/ClipSlider"
import PlaylistNames from "../PlaylistNames"
import axios from "axios";
import {convert, toSeconds, format} from '../../utils/helpers'
import "../../css/Clip.css";

class Clips extends React.Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      videoUrl: props.videoUrl,
      videoTitle: props.videoTitle,
      startTime: "",
      endTime: "",
      clipsList: [],
      selectedClip: null,
      values: null,
      duration: null,
      clipTitle: "",
      clipPlaying: false
    };

    //refs
    this.videoRef = React.createRef();
  }


  handleClipTitle = (title) => {
    this.setState({
      ...this.state,
      clipTitle: title
    });
  }

  // Randomly generates an id
  uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  // Creates the clip and sets it in state
  handleTrim = (startTime, endTime) => {
    let newClip = {
      clipId: this.uuidv4(),
      start: startTime,
      end: endTime,
      title: this.state.clipTitle,
      video_url: this.state.videoUrl
    };

    this.setState(
      {
        ...this.state,
        clipsList: this.state.clipsList.concat(newClip),
      },
      () => {
        console.log(this.state.clipsList);
      }
    );

    const url = "http://localhost:3001/clips/store_clip/"
    
    axios.post(url, {
      start_timestamp: this.state.startTime,
      end_timestamp: this.state.endTime,
      clip_title: this.state.clipTitle,
      azure_url: this.state.videoUrl,
    })
  };

  // Selects a clip to display in the Clip component
  selectClip = clip => {
    this.setState({
      ...this.state,
      selectedClip: { clip },
      clipPlaying: true
    });
  };

  handleReturnToVideo = () => {
    this.setState({
      clipPlaying: false
    })
  }

  // Finds a clip by its ID and removes it from clips gallery
  handleDeleteClip = clip => {
    const clipId = clip.clipId;
    console.log(clipId);
    this.setState(
      {
        ...this.state,
        clipsList: this.state.clipsList.filter(
          _clip => _clip.clipId !== clipId
        ),
        selectedClip: null
      },
      () => {
        console.log(this.state.clipsList);
      }
    );
  };

  // Sends the list of clips to database
  handleSave = () => {
    axios.post("http://localhost:3001/saveClip", {
      sourceVideo: this.state.videoUrl,
      clipsList: this.state.clipsList
    });
  };

  // Loads the video's entire duration for clipping
  componentDidMount = () =>{
    this.videoRef.current.addEventListener('loadedmetadata', () => {
      this.setState({
        duration: this.videoRef.current.duration
      })
    })
  }
  render() {
    return (
      <div className="clip-component-container">
        <div className="flex-container">
          <div className="player-video-container">
            <h1>{this.state.videoTitle}</h1>
            {this.state.clipPlaying ? (
              <ClipPreview
                selectedClip={this.state.selectedClip}
                sourceUrl={this.state.videoUrl}
              />
            ) : (
              <video
                id="vid1"
                ref={this.videoRef}
                className="azuremediaplayer amp-default-skin"
                controls
                autoPlay
                width="640"
                height="400"
                poster="poster.jpg"
              >
                <source src={this.state.videoUrl} />
              </video>
            )}
            <div>
              <PlaylistNames />
            </div>
            <br />
            <div>
              {this.state.duration ? 
              this.state.clipPlaying ? null :
              (
                <ClipSlider
                  duration={this.state.duration}
                  handleSliderClip={this.handleSliderClip}
                  handleClipTitle={this.handleClipTitle}
                  handleTrim={this.handleTrim}
                  handleSave={this.handleSave}
                />
              ) : null}
            </div>
          </div>

          <div className="clip-gallery-container">
            <h1>Your clips</h1>
            <button onClick={this.handleReturnToVideo}>Return to Main Video</button>
            <ClipsGallery
              clipsList={this.state.clipsList}
              url={this.state.videoUrl}
              selectClip={this.selectClip}
              handleDeleteClip={this.handleDeleteClip}
              title={this.state.clipTitle}
              clipPlaying={this.handleReturnToVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoUrl: state.videoUrl ?? localStorage.getItem("videoUrl"),
    videoTitle: state.videoTitle 
  }
}

export default connect(mapStateToProps)(Clips);
