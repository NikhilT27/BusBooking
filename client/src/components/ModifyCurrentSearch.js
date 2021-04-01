import React, { useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import SwapArrow from "../images/swap.svg";
import Cancel from "../images/cancel.svg";

export default function ModifyCurrentSearch({
  onModifyClicked,
  from,
  to,
  date,
}) {
  let history = useHistory();
  const [formData, setFormData] = useState({
    from: from,
    to: to,
    date: date,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function SwapData(event) {
    event.preventDefault();
    let temp = formData.from;
    setFormData({
      ...formData,
      from: formData.to,
      to: temp,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push(
      `/searchbus?from=${formData.from}&to=${formData.to}&date=${formData.date}`
    );
    onModifyClicked();
  }

  return (
    <div>
      <button className="form-modify-close" onClick={onModifyClicked}>
        <img src={Cancel} className="form-modify-close-logo" />
      </button>
      <form className="form-modify" onSubmit={handleSubmit}>
        <div className="form-modify-box">
          <span className="form-modify-title">FROM</span>
          <input
            name="from"
            type="text"
            placeholder="FROM"
            value={formData.from}
            onChange={handleChange}
            className="form-modify-input"
          ></input>
        </div>
        <button className="form-modify-swap-button" onClick={SwapData}>
          <img src={SwapArrow} className="form-modify-swap-logo" />
        </button>
        <div className="form-modify-box">
          <span className="form-modify-title">TO</span>
          <input
            name="to"
            type="text"
            placeholder="TO"
            value={formData.to}
            onChange={handleChange}
            className="form-modify-input"
          ></input>
        </div>
        <div className="form-modify-box">
          <span className="form-modify-title">DATE</span>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            min={moment().format("YYYY-MM-DD")}
            className="form-modify-input"
          ></input>
        </div>
        <button type="submit" className="form-modify-submit-button">
          Search
        </button>
      </form>
    </div>
  );
}
