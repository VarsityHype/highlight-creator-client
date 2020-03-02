import React from "react";
import ClipPreview from "./ClipPreview";
import ClipsGallery from "./ClipsGallery";
import axios from "axios";
import "../../css/Clip.css";

class Clips extends React.Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      videoUrl:
        "https://astorageserver.blob.core.windows.net/video-storagea/8911870163918805-8861367419101975-Cute%20Cat%20-%203092.mp4",
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

  // Randomly generates an id
  uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  // Creates the clip and sets it in state
  handleTrim = () => {
    let newClip = {
      clipId: this.uuidv4(),
      start: this.state.startTime,
      end: this.state.endTime
    };

    this.setState(
      {
        ...this.state,
        clipsList: this.state.clipsList.concat(newClip)
      },
      () => {
        console.log(this.state.clipsList);
      }
    );
  };

  // Selects a clip to display in the Clip component
  selectClip = clip => {
    this.setState({
      ...this.state,
      selectedClip: { clip }
    });
  };

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

  handleSave = () => {
    axios.post("http://localhost:3001/saveClip", {
      sourceVideo: this.state.videoUrl,
      clipsList: this.state.clipsList
    });
  };
  render() {
    return (
      <div className="clip-component-container">
        <div className="flex-container">
          <div className="player-video-container">
            <h1>sdfasdf</h1>
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
              <source
                src={this.state.videoUrl}
                // type="video/mp4"
              />
            </video>
            <br />

            <button onClick={this.handleStart}>Start</button>
            <button onClick={this.handleEnd}>End</button>
            <button onClick={this.handleTrim}>Create Clip</button>
            <button onClick={this.handleSave}>Export Clip</button>
          </div>
          <div className="clip-gallery-container">
            <h1>Your clips</h1>

            <ClipsGallery
              clipsList={this.state.clipsList}
              url={this.state.videoUrl}
              selectClip={this.selectClip}
              handleDeleteClip={this.handleDeleteClip}
            />
          </div>
        </div>

        {this.state.selectedClip ? (
          <ClipPreview
            selectedClip={this.state.selectedClip}
            sourceUrl={this.state.videoUrl}
          />
        ) : null}
      </div>
    );
  }
}

export default Clips;