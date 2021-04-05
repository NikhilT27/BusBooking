import React, { useState, useRef, useEffect } from "react";

export default function EachPassengerForm({
  id,
  index,
  isSubmitForm,
  UnSubmitForm,
}) {
  const buttonClick = useRef();

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

  return (
    <form className="passenger-form" onSubmit={() => console.log("Submit")}>
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
        ></input>
      </div>
      <div className="passenger-form-row">
        <div className="passenger-form-column">
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
        <div className="passenger-form-column">
          <label className="passenger-form-title">Age</label>
          <input
            onChange={handleChange}
            name="age"
            type="text"
            placeholder="Age"
            value={formData.age}
            required="required"
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
