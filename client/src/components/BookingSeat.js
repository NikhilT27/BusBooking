import React, { useState } from "react";
import cancel from "../images/cancel.svg";
import Deck from "./Deck";
import { useSelector, useDispatch } from "react-redux";
import { selectBus } from "../features/seats/seatsSlice";
import SeatLegends from "./SeatLegends";
import BookingOptions from "./BookingOptions";

export default function BookingSeat({ openBooking, data }) {
  let busId = useSelector(selectBus);
  const dispatch = useDispatch();
  let { share_seat_price, single_seat_price } = data;

  console.log(busId);
  return (
    <div className="booking">
      <div className="booking-box">
        <button className="booking-cancel-button" onClick={openBooking}>
          <img src={cancel} className="booking-cancel-logo" />
        </button>
        <h3>Seat Price</h3>
        <button className="booking-price-button">All</button>
        <button className="booking-price-button">{single_seat_price}</button>
        <button className="booking-price-button">{share_seat_price}</button>
      </div>
      <div className="booking-box">
        <div className="booking-bus-seats">
          <div>
            <h4>Lower Deck</h4>
            <Deck data={data} type="Lower" />
          </div>
          <div>
            <h4>Upper Deck</h4>
            <Deck data={data} type="Upper" />
          </div>
        </div>
        <div className="booking-bus-option">
          {busId === "" ? <SeatLegends /> : <BookingOptions data={data} />}
        </div>
      </div>
    </div>
  );
}
