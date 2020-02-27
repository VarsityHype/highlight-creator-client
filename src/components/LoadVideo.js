import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useEffect, useState } from "react";

export default function LoadVideo(props) {
  const [sourceVideo, setSourceVideo] = useState("");
  const [startTime, setStartTime] = useState("");
  const [stopTime, setStopTime] = useState("");

  const handleStart = () => {
    setStartTime("5");
  };
  const handleEnd = () => {
    setStartTime("7");
  };
  const handleClip = () => {};

  return (
    <div>
      <div className="Player-video-container">
        <video
          id="vid1"
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
      <div className="video-clips-container"></div>
    </div>
  );
}
