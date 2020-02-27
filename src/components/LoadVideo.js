import React from "react";
import Clips from "./Clips";

class LoadVideo extends React.Component {
  constructor(props) {
    super(props);

    //refs
    this.videoRef = React.createRef();

    //state
    this.state = {
      startTime: "",
      stopTime: "",
      clipsList: []
    };

    //refs
    this.videoRef = React.createRef();

    const sourceVideo = this.videoRef.source;
    console.log(sourceVideo);
  }

  handleVideoMounted = element => {
    if (element !== null) {
      element.currentTime = 30;
    }
  };

  handleStart = ref => {
    this.setState({
      ...this.state,
      startTime: this.videoRef.current.currentTime
    });
  };

  handleEnd = () => {
    this.setState({
      ...this.state,
      stopTime: this.videoRef.current.currentTime
    });
  };

  handleTrim = () => {
    let newClip = {
      start: this.state.startTime,
      stop: this.state.stopTime
    };

    this.setState({
      ...this.state,
      clipsList: this.state.clipsList.concat(newClip)
    });
  };

  render() {
    return (
      <div>
        <div className="Player-video-container">
          <video
            id="vid1"
            ref={this.videoRef}
            className="azuremediaplayer amp-default-skin"
            controls
            width="640"
            height="400"
            poster="poster.jpg"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              type="video/mp4"
            />
          </video>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handleEnd}>End</button>
          <button onClick={this.handleTrim}>Create Clip</button>
        </div>
        <h1>Your clips</h1>
        <div>
          {this.state.clipsList.map(clip => {
            return (
              <Clips
                start={clip.start}
                stop={clip.stop}
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default LoadVideo;
