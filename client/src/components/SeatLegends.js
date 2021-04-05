import React from "react";

export default function SeatLegends() {
  return (
    <div className="legend">
      <h4>Seat Legends</h4>
      <div className="legend-sub">
        <div className="legend-sub-each">
          <div className="legend-sub-each-logo"></div>
          <span>Available</span>
        </div>
        <div className="legend-sub-each">
          <div className="legend-sub-each-logo legend-sub-each-unavailable"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
}
