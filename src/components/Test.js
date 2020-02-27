import React from 'react'
import { connect } from 'react-redux'

// Component for testing Redux (Delete when ready)
const Test = (props) => {
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
          id="vid1"
          class="azuremediaplayer amp-default-skin"
          autoplay
          controls
          width="640"
          height="400"
          poster="poster.jpg"
          data-setup='{"nativeControlsForTouch": false}'
          startInSec='10'
        >
          <source
            src={`${url}#t=${starttime},${endtime}`}
            type="application/vnd.ms-sstr+xml"
          />
          <p class="amp-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that supports HTML5 video
          </p>
        </video>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTestSuccess: () => dispatch ({ type: 'TEST_SUCCESS'})
    }
}

export default connect(null, mapDispatchToProps) (Test)