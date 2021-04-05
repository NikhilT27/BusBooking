import React, { useState } from "react";
import EachPassengerForm from "./EachPassengerForm";
import { useSelector, useDispatch } from "react-redux";
import { addSeat, selectSeats } from "../features/seats/seatsSlice";
import ContactForm from "./ContactForm";
import letter from "../images/letter.svg";
import person from "../images/person.svg";

export default function PassengerDetail({ handleProceedClick, total }) {
  const seats = useSelector(selectSeats);
  const [isSubmitForm, setIsSubmitForm] = useState(false);

  function SubmitForm() {
    setIsSubmitForm(true);
  }

  function UnSubmitForm() {
    setIsSubmitForm(false);
  }

  return (
    <div className="passenger">
      <div className="passenger-detail">
        <div className="passenger-row">
          <h3>Passenger Detail</h3>
          <button
            className="passenger-back-button"
            onClick={handleProceedClick}
          ></button>
        </div>
        <div className="passenger-scroll">
          <div>
            <div className="passenger-information-box">
              <img src={person} className="passenger-information-logo" />
              <h4>Passenger Information</h4>
            </div>
            {seats.map((id, index) => {
              return (
                <EachPassengerForm
                  key={id}
                  id={id}
                  index={index}
                  isSubmitForm={isSubmitForm}
                  UnSubmitForm={UnSubmitForm}
                />
              );
            })}
          </div>
          <div>
            <div className="passenger-information-box">
              <img src={letter} className="passenger-information-logo" />
              <h4>Contact Details</h4>
            </div>
            <ContactForm
              isSubmitForm={isSubmitForm}
              UnSubmitForm={UnSubmitForm}
            />
          </div>
        </div>
        <div className="passenger-bill">
          <span>
            Total Amount : <strong>INR {total}</strong>
          </span>
          <button className="passenger-book-ticket-button" onClick={SubmitForm}>
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </div>
  );
}
