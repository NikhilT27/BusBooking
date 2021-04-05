import React, { useState } from "react";
import cancel from "../images/cancel.svg";
import Deck from "./Deck";
import { useSelector, useDispatch } from "react-redux";
import {
  addSeatType,
  selectBus,
  selectSeatType,
} from "../features/seats/seatsSlice";
import SeatLegends from "./SeatLegends";
import BookingOptions from "./BookingOptions";

export default function BookingSeat({ openBooking, data }) {
  let busId = useSelector(selectBus);
  let seatType = useSelector(selectSeatType);

  const dispatch = useDispatch();
  let { share_seat_price, single_seat_price } = data;

  console.log(busId);

  function handleSeatTypeButton(event) {
    dispatch(addSeatType(event.target.name));
  }
  return (
    <div className="booking">
      <div className="booking-box">
        <button className="booking-cancel-button" onClick={openBooking}>
          <img src={cancel} className="booking-cancel-logo" />
        </button>
        <div className="booking-seat-price">
          <h3>Seat Price</h3>
          <button
            onClick={handleSeatTypeButton}
            name="ALL"
            className={
              seatType === "ALL"
                ? "booking-price-button booking-price-button-clicked"
                : "booking-price-button"
            }
          >
            All
          </button>
          <button
            onClick={handleSeatTypeButton}
            name="SINGLE"
            className={
              seatType === "SINGLE"
                ? "booking-price-button booking-price-button-clicked"
                : "booking-price-button"
            }
          >
            {single_seat_price}
          </button>
          <button
            onClick={handleSeatTypeButton}
            name="SHARE"
            className={
              seatType === "SHARE"
                ? "booking-price-button booking-price-button-clicked"
                : "booking-price-button"
            }
          >
            {share_seat_price}
          </button>
        </div>
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
