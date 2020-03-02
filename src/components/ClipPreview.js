import React, { Component } from "react";

class ClipPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceUrl: "",
      selectedClip: "",
      startTime: "",
      endTime: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      sourceUrl: this.props.sourceUrl,
      selectedClip: this.props.selectedClip,
      startTime: this.props.selectedClip.clip.start,
      endTime: this.props.selectedClip.clip.end
    });
  }

  componentDidUpdate = () => {
    if (this.props.selectedClip !== this.state.selectedClip) {
      this.setState({
        sourceUrl: this.props.sourceUrl,
        selectedClip: this.props.selectedClip,
        startTime: this.props.selectedClip.clip.start,
        endTime: this.props.selectedClip.clip.end
      });
    }
  }

  render() {
    return (
      <div className="Player-video-container">
        <video
          id="vid1"
          className="azuremediaplayer amp-default-skin"
          autoPlay
          controls={false}
          width="640"
          height="400"
          poster="poster.jpg"
          src={`${this.state.sourceUrl}#t=${this.state.startTime},${this.state.endTime}`}
        >
        </video>
      </div>
    );
  }
}

export default ClipPreview;
