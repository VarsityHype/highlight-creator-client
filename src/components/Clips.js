import React, { Component } from "react";

class Clips extends Component {
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
          <source
            src={`${this.props.url}#t=${this.props.start},${this.props.stop}`}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default Clips;
