import React from "react";

export const Track = ({ source, target, getTrackProps }) => (
  <div
    style={{
      position: "absolute",
      height: 14,
      zIndex: 1,
      backgroundColor: "#fff",
      borderRadius: 7,
      cursor: "pointer",
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);
