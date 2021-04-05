import React, { useState, useRef, useEffect } from "react";

export default function ContactForm({ id, index, isSubmitForm, UnSubmitForm }) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const buttonClick = useRef();

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

  return (
    <form className="passenger-form" onSubmit={() => console.log("Submit")}>
      <div className="passenger-form-column">
        <label className="passenger-form-title">Email ID</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          required="required"
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
        ></input>
      </div>
      <button type="submit" className="passenger-form-button" ref={buttonClick}>
        Submit Contact
      </button>
    </form>
  );
}
