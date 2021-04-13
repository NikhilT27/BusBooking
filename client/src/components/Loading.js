import React from "react";

export default function Loading({ title }) {
  return (
    <div className="loading">
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
      <div className="loading-title-box">
        <span className="loading-title">{title ? title : "Loading"}</span>
      </div>
    </div>
  );
}
