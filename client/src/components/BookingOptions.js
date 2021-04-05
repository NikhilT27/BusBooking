import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSeat, selectSeats } from "../features/seats/seatsSlice";
import PassengerDetail from "./PassengerDetail";

export default function BookingOptions({ data }) {
  const seats = useSelector(selectSeats);

  const [selectedOption, setSelectedOption] = useState("booking");
  const [selectedData, setSelectedData] = useState([]);
  const [boardingPoint, setBoardingPoint] = useState("");
  const [droppingPoint, setDroppingPoint] = useState("");
  const [showBill, setShowBill] = useState(false);
  const [showPassengerDetail, setShowPassengerDetail] = useState(false);

  let {
    boarding_point,
    dropping_point,
    timing,
    share_seat_price,
    single_seat_price,
  } = data;

  useEffect(() => {
    if (selectedOption === "booking") {
      setSelectedData(boarding_point);
    } else {
      setSelectedData(dropping_point);
    }
  }, [selectedOption]);

  function handleCheckboxClick(id) {
    console.log(`clicked ${id}`);
    if (selectedOption === "booking") {
      setBoardingPoint(id);
    } else {
      setDroppingPoint(id);
    }
  }

  function handleContinueClick() {
    if (boardingPoint !== "" && droppingPoint !== "") {
      setShowBill(!showBill);
    }
  }

  function handleProceedClick() {
    console.log("Passenger clicked");
    setShowPassengerDetail(!showPassengerDetail);
    console.log(showPassengerDetail);
  }

  function totalCost() {
    let value = seats.map((each) => {
      if (each.length === 2) {
        return share_seat_price;
      } else {
        return single_seat_price;
      }
    });

    if (value.length !== 0) {
      return value.reduce((total, num) => total + num);
    }
    return 0;
  }

  if (showBill) {
    let boardingData = boarding_point.find(
      (each) => each._id === boardingPoint
    );
    let droppingData = dropping_point.find(
      (each) => each._id === droppingPoint
    );

    return (
      <>
        {showPassengerDetail ? (
          <PassengerDetail
            handleProceedClick={handleProceedClick}
            total={totalCost()}
          />
        ) : (
          <></>
        )}
        <div className="bill">
          <div className="bill-data">
            <div className="bill-data-each">
              <strong>Boarding & Dropping</strong>
              <button
                className="bill-data-button"
                onClick={handleContinueClick}
              >
                Change
              </button>
            </div>
            <div className="bill-data-style">
              <div className="bill-data-each">
                <span>{boardingData.address}</span>
                <span style={{ fontWeight: "bold" }}>
                  {moment(timing.arrival)
                    .add(boardingData.add_time, "h")
                    .format("HH:mm")}
                </span>
              </div>
              <div className="bill-data-each">
                <span>{droppingData.address}</span>
                <span style={{ fontWeight: "bold" }}>
                  {moment(timing.departure)
                    .add(droppingData.add_time, "h")
                    .format("HH:mm")}
                </span>
              </div>
            </div>
          </div>
          <div className="bill-data-each bill-data-seats ">
            <strong>Seat No.</strong>
            <div>
              {seats.map((each) => {
                return (
                  <span key={each} className="bill-data-seat">
                    {each}
                    {seats.length > 1 ? "," : ""}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="bill-data-each">
            <strong>Fare Detail</strong>
          </div>
          <div className="bill-data-each">
            <div>
              <strong>Amount</strong>
              <div>
                <span className="bill-data-subtitle">
                  (Taxes will be calculated during payment)
                </span>
              </div>
            </div>
            <strong>INR {totalCost()}</strong>
          </div>
          <div className="bill-data-each">
            <button
              className="booking-confirm-button"
              onClick={handleProceedClick}
            >
              PROCEED TO BOOK
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="booking-option">
        <div className="booking-option-button-box">
          <button
            className={
              selectedOption === "booking"
                ? "booking-option-button booking-option-button-selected"
                : "booking-option-button"
            }
            onClick={() => setSelectedOption("booking")}
          >
            BOARDING POINT
          </button>
          <button
            className={
              selectedOption === "dropping"
                ? "booking-option-button booking-option-button-selected"
                : "booking-option-button"
            }
            onClick={() => setSelectedOption("dropping")}
          >
            DROPING POINT
          </button>
        </div>
        <ul>
          {selectedData &&
            selectedData.map((each) => {
              return (
                <li
                  key={each._id}
                  name={each._id}
                  className="booking-option-each-checkbox"
                  onClick={() => {
                    handleCheckboxClick(each._id);
                  }}
                >
                  <div
                    className={
                      boardingPoint === each._id || droppingPoint === each._id
                        ? "booking-option-each-checkbox-logo-select"
                        : "booking-option-each-checkbox-logo-outer"
                    }
                  ></div>
                  <span className="booking-option-each-time">
                    {selectedOption === "booking"
                      ? moment(timing.arrival)
                          .add(each.add_time, "m")
                          .format("HH:mm")
                      : moment(timing.departure)
                          .add(each.remove_time, "m")
                          .format("HH:mm")}
                  </span>
                  <span>{each.address}</span>
                </li>
              );
            })}
        </ul>
        <div className="booking-confirm">
          <div className="booking-confirm-button-box">
            <strong>Amount</strong>
            <strong>
              INR <span>{totalCost()}</span>
            </strong>
          </div>
          <button
            className="booking-confirm-button"
            onClick={handleContinueClick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
