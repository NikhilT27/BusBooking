import React, { useState, useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addPassengerData,
  selectPassengerData,
} from "../features/seats/seatsSlice";

export default function EachPassengerForm({
  id,
  index,
  isSubmitForm,
  UnSubmitForm,
  boardingData,
  droppingData,
}) {
  const buttonClick = useRef();

  const passengerData = useSelector(selectPassengerData);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    if (isSubmitForm) {
      refClickHandle();
      UnSubmitForm();
    }
  }, [isSubmitForm]);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function refClickHandle() {
    buttonClick.current.click();
  }

  function handleSubmit(event) {
    if (formData.name != "" && formData.gender != "" && formData.age != "") {
      if (passengerData.includes(formData)) {
        console.log("includessss");
      } else {
        dispatch(
          addPassengerData({
            ...formData,
            seatno: id,
            boarding_point: boardingData.address,
            dropping_point: droppingData.address,
          })
        );
      }
    }
    event.preventDefault();
  }

  return (
    <form className="passenger-form" onSubmit={handleSubmit}>
      <label className="passenger-form-title">
        Passenger {index + 1} | <strong>Seat {id}</strong>
      </label>
      <div className="passenger-form-column">
        <label className="passenger-form-title">Name</label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          required="required"
          className="passenger-form-input"
        ></input>
      </div>
      <div className="passenger-form-row passenger-form-row-disable">
        <div className="passenger-form-column passenger-form-column-disable">
          <label className="passenger-form-title">Gender</label>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              id="male"
              name="gender"
              value="male"
              required="required"
            ></input>
            <label for="male">Male</label>
            <input
              onChange={handleChange}
              type="radio"
              id="female"
              name="gender"
              value="female"
              required="required"
            ></input>
            <label for="female">Female</label>
          </div>
        </div>
        <div className="passenger-form-column passenger-form-column-disable">
          <label className="passenger-form-title">Age</label>
          <input
            onChange={handleChange}
            name="age"
            type="text"
            placeholder="Age"
            value={formData.age}
            required="required"
            className="passenger-form-input"
          ></input>
        </div>
      </div>
      <button
        type="submit"
        className="passenger-form-button"
        ref={buttonClick}
      ></button>
    </form>
  );
}
