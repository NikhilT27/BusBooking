import React, { useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import building from "../images/building.svg";

export default function Introduction() {
  let history = useHistory();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: moment().format("YYYY-MM-DD"),
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    if (formData.from != "" && formData.to != "" && formData.date != "") {
      history.push(`/search/${formData.from}/${formData.to}/${formData.date}`);
    }

    event.preventDefault();
  }

  return (
    <div>
      <span>Introduction</span>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-each-box">
          <img src={building} alt="" className="form-logo" />
          <input
            name="from"
            type="text"
            placeholder="FROM"
            value={formData.from}
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        <div className="form-each-box">
          <img src={building} alt="" className="form-logo" />
          <input
            name="to"
            type="text"
            placeholder="TO"
            value={formData.to}
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        <div className="form-each-box">
          <img src={building} alt="" className="form-logo" />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            min={moment().format("YYYY-MM-DD")}
            className="form-input"
          ></input>
        </div>
        <button type="submit" className="form-submit-button">
          Search Buses
        </button>
      </form>
    </div>
  );
}
