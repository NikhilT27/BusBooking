import React, { useState } from "react";

import Amenities from "./Amenities";
import BookingSeat from "./BookingSeat";

export default function EachBusData() {
  const [openSeats, setOpenSeats] = useState(false);

  function openBooking() {
    setOpenSeats(!openSeats);
  }

  return (
    <div className="result-each">
      <div className="result-each-data">
        <div className="result-each-data-name">
          <strong className="result-each-data-name-title">Bus Name</strong>
          <span className="result-each-data-name-type">Type</span>
        </div>
        <div className="result-each-data-departure">
          <span className="result-each-data-departure-time">
            Departure Time
          </span>
          <span className="result-each-data-departure-place">
            Departure Place
          </span>
        </div>
        <span className="result-each-data-total-time">Total Time</span>
        <div className="result-each-data-arrival">
          <span className="result-each-data-arrival-time">Arrival Time</span>
          <span className="result-each-data-arrival-place">Arrival Place</span>
        </div>
        <span className="result-each-data-price">
          <span style={{ fontWeight: 400 }}>INR</span> Price
        </span>
        <div className="result-each-data-extra">
          <span className="result-each-data-extra-available">
            <span className="bold">20</span> Available
          </span>
          <span className="result-each-data-extra-windows">
            <span className="bold">20</span> Windows
          </span>
        </div>
      </div>

      <div className="result-each-amenities">
        <Amenities />
      </div>
      <div className="result-each-seats">
        <button className="result-each-seats-button" onClick={openBooking}>
          {openSeats ? <span>Hide</span> : <span>View</span>} Seat
        </button>
      </div>
      {openSeats ? <BookingSeat openBooking={openBooking} /> : <></>}
    </div>
  );
}
