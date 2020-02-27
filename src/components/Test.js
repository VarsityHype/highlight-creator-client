import React from "react";
import { connect } from "react-redux";

// Component for testing Redux (Delete when ready)
const Test = props => {
  return (
    <div>
      <h1>Testing</h1>
      <button
        onClick={() => {
          props.onTestSuccess();
        }}
      >
        Button
      </button>
      <video
        onLoadedMetadata={this.props.startTime}
        id="vid1"
        class="azuremediaplayer amp-default-skin"
        autoplay
        controls
        width="640"
        height="400"
        poster="poster.jpg"
        data-setup='{"nativeControlsForTouch": false}'
        startInSec="10"
      >
        <source
          src="http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest"
          type="application/vnd.ms-sstr+xml"
        />
      </video>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onTestSuccess: () => dispatch({ type: "TEST_SUCCESS" })
  };
};

export default connect(null, mapDispatchToProps)(Test);
