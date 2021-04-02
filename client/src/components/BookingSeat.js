import React, { useState } from "react";
import cancel from "../images/cancel.svg";
import Deck from "./Deck";

export default function BookingSeat({ openBooking }) {
  return (
    <div className="booking">
      <div className="booking-box">
        <button className="booking-cancel-button" onClick={openBooking}>
          <img src={cancel} className="booking-cancel-logo" />
        </button>
        <h3>Seat Price</h3>
        <button className="booking-price-button">All</button>
        <button className="booking-price-button">Single</button>
        <button className="booking-price-button">Share</button>
      </div>
      <div className="booking-box">
        <div className="booking-bus-seats">
          <div>
            <h4>Lower Deck</h4>
            <Deck />
          </div>
        </div>
        <div>Boarding Points</div>
      </div>
    </div>
  );
}
