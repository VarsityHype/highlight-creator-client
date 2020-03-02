import React from "react";
import ClipPreview from "./ClipPreview";
import ClipsGallery from "./ClipsGallery";
class LoadVideo extends React.Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      startTime: "",
      endTime: "",
      clipsList: [],
      selectedClip: null
    };

    //refs
    this.videoRef = React.createRef();
    const sourceVideo = this.videoRef.source;
  }

  // Sets the beginning of the clip with the "Start" button
  handleStart = ref => {
    this.setState({
      ...this.state,
      startTime: this.videoRef.current.currentTime
    });
  };

  // Sets the end of the clip with the "End" button
  handleEnd = () => {
    this.setState({
      ...this.state,
      endTime: this.videoRef.current.currentTime
    });
  };

  // Creates the clip and sets it in state
  handleTrim = () => {
    let newClip = {
      start: this.state.startTime,
      stop: this.state.endTime
    };

    this.setState({
      ...this.state,
      clipsList: this.state.clipsList.concat(newClip)
    });
  };

  // Selects a clip to display in the Clip component
  selectClip = clip => {
    this.setState({
      ...this.state,
      selectedClip: { clip }
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
              src="https://astorageserver.blob.core.windows.net/video-storagea/2436622728986777-test.mp4"
              type="video/mp4"
            />
          </video>
          <br />

          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handleEnd}>End</button>
          <button onClick={this.handleTrim}>Create Clip</button>
        </div>
        <h1>Your clips</h1>

        <ClipsGallery
          clipsList={this.state.clipsList}
          url="https://astorageserver.blob.core.windows.net/video-storagea/2436622728986777-test.mp4"
          selectClip={this.selectClip}
        />

        {this.state.selectedClip ? (
          <ClipPreview
            selectedClip={this.state.selectedClip}
            sourceUrl="https://astorageserver.blob.core.windows.net/video-storagea/2436622728986777-test.mp4"
          />
        ) : null}
      </div>
    );
  }
}

export default LoadVideo;
