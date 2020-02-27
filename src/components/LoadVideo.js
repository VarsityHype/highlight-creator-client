import React from "react";
import VideoPlayer from "../components/VideoPlayer";

export default function LoadVideo() {
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
      </div>
    </div>
  );
}
