import React, { Component } from "react";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceVideo: this.props.sourceVideo,
      startTime: this.props.startTime,
      stopTime: this.props.stopTime
    };
  }

  render() {
    return (
      <div className="Player-video-container">
        <video
          id="vid1"
          className="azuremediaplayer amp-default-skin"
          autoPlay={true}
          controls={false}
          width="640"
          height="400"
          poster="poster.jpg"
        >
          {/* <source src={`${URL}#t=${startTime}, ${stopTime}`} type="video/mp4" /> */}
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
