import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addContactData,
  selectContactData,
} from "../features/seats/seatsSlice";

export default function ContactForm({ id, index, isSubmitForm, UnSubmitForm }) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const buttonClick = useRef();

  const dispatch = useDispatch();
  const contactData = useSelector(selectContactData);

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
    if (formData.email != "" && formData.phone != "") {
      if (contactData === formData) {
        console.log("includessss");
      } else {
        dispatch(addContactData(formData));
      }
    }
    event.preventDefault();
  }

  return (
    <form className="passenger-form" onSubmit={handleSubmit}>
      <div className="passenger-form-column">
        <label className="passenger-form-title">Email ID</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          required="required"
          className="passenger-form-input"
        ></input>
      </div>
      <div className="passenger-form-column">
        <label className="passenger-form-title">Phone</label>
        <input
          onChange={handleChange}
          name="phone"
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          placeholder="Phone"
          value={formData.phone}
          required="required"
          className="passenger-form-input"
        ></input>
      </div>
      <button type="submit" className="passenger-form-button" ref={buttonClick}>
        Submit Contact
      </button>
    </form>
  );
}
