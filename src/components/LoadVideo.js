import React from "react";
import Clips from "./Clips";
import { useEffect, useState, useRef } from "react";

 const LoadVideo = props => {
  const [sourceVideo, setSourceVideo] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
  const [startTime, setStartTime] = useState("");
  const [stopTime, setStopTime] = useState("");
  const [clip, setClip] = useState(false)

  const videoRef = useRef("vid1")

  const handleStart = () => {
    console.log(videoRef.current.currentTime)
    // console.log(ref)
    // if (ref !== null) {
    //   setStartTime(ref.currentTime);
    // }
  };
  const handleEnd = (ref) => {
    console.log(videoRef.current.currentTime)
    // if (ref !== null) {
    //   setStopTime(ref.currentTime);
  // };
}
  const handleClip = () => {
    setClip(true)
  };

  return (
    <div>
      <div className="Player-video-container">
        <video
          id="vid1"
          ref={videoRef}
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
        <button onClick={handleStart}>Start</button>
        <button onClick={handleEnd}>End</button>
        <button onClick={handleClip}>Create Clip</button>
      </div>
      <div className="video-clips-container">
        {clip ? <Clips sourceVideo={sourceVideo} startTime={startTime} stopTime={stopTime} /> : null}
      </div>
    </div>
  );
}

export default LoadVideo