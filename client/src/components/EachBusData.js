import React, { useEffect, useState } from "react";

import Amenities from "./Amenities";
import BookingSeat from "./BookingSeat";
import { useSelector, useDispatch } from "react-redux";
import {
  emptySeats,
  emptyBookedSeats,
  selectSeats,
  addBookedSeats,
  addSelectedBus,
  removeSelectedBus,
} from "../features/seats/seatsSlice";
import moment from "moment";

export default function EachBusData({ data }) {
  let {
    name,
    _id,
    ac,
    amenities,
    boarding_point,
    dropping_point,
    booked_seat,
    from,
    share_seat_price,
    single_seat_price,
    timing,
    to,
    type,
  } = data;
  const [openSeats, setOpenSeats] = useState(false);

  const dispatch = useDispatch();

  function openBooking() {
    setOpenSeats(!openSeats);
    dispatch(removeSelectedBus());
    if (!openSeats) {
      dispatch(emptySeats());
      dispatch(emptyBookedSeats());
      dispatch(addSelectedBus(_id));
    }
  }

  return (
    <div className="result-each">
      <div className="result-each-data">
        <div className="result-each-data-name">
          <strong className="result-each-data-name-title">{name}</strong>
          <span className="result-each-data-name-type">{type}</span>
        </div>
        <div className="result-each-data-departure">
          <span className="result-each-data-departure-time">
            {moment(timing.departure).format("HH:mm")}
          </span>
          <span className="result-each-data-departure-place">
            {boarding_point[0].placename}
          </span>
        </div>
        <span className="result-each-data-total-time">
          {moment(timing.arrival).diff(moment(timing.departure), "hours")} hr
        </span>
        <div className="result-each-data-arrival">
          <span className="result-each-data-arrival-time">
            {moment(timing.arrival).format("HH:mm")}
          </span>
          <span className="result-each-data-arrival-place">
            {dropping_point[0].placename}
          </span>
        </div>
        <span className="result-each-data-price">
          <span style={{ fontWeight: 400 }}>INR</span> {single_seat_price}
        </span>
        <div className="result-each-data-extra">
          <span className="result-each-data-extra-available">
            <span className="bold">{30 - booked_seat.length}</span> Available
          </span>
          <span className="result-each-data-extra-windows">
            <span className="bold">20</span> Windows
          </span>
        </div>
      </div>

      <div className="result-each-amenities">
        <Amenities data={amenities} />
      </div>
      <div className="result-each-seats">
        <button className="result-each-seats-button" onClick={openBooking}>
          {openSeats ? <span>Hide</span> : <span>View</span>} Seat
        </button>
      </div>
      {openSeats ? (
        <BookingSeat data={data} openBooking={openBooking} />
      ) : (
        <></>
      )}
    </div>
  );
}
