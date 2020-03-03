import React from "react";

export const Handle = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps
}) => (
  <div
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: "absolute",
      marginLeft: "-11px",
      marginTop: "-6px",
      zIndex: 2,
      width: 24,
      height: 24,
      cursor: "pointer",
      borderRadius: "50%",
      boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#333"
    }}
    {...getHandleProps(id)}
  />
);
