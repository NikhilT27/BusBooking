import React, { useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import moment from "moment";

import rightArrow from "../images/right.svg";
import next from "../images/next.svg";

export default function CurrentSearch({ onModifyClicked, from, to, date }) {
  let history = useHistory();
  const [currentDate, setcurrentDate] = useState(date);

  function handlePreviousButton() {
    console.log("previous button clicked");
    setcurrentDate(moment(currentDate).subtract(1, "d").format("YYYY-MM-DD"));
    history.push(`/searchbus?from=${from}&to=${to}&date=${currentDate}`);
  }

  function handleNextButton() {
    console.log("previous button clicked");
    setcurrentDate(moment(currentDate).add(1, "d").format("YYYY-MM-DD"));
    history.push(`/searchbus?from=${from}&to=${to}&date=${currentDate}`);
  }

  return (
    <>
      <div className="search-current-result">
        <div className="search-current-from-to">
          <span>{from}</span>
          <img src={rightArrow} className="search-current-result-arrow" />
          <span>{to}</span>
        </div>
        <div className="search-current-date-modify">
          <div className="search-current-result-date-box">
            <button
              className="search-current-result-button"
              onClick={handlePreviousButton}
            >
              <img src={next} className="search-current-result-previous" />
            </button>
            <div className="search-current-result-date-text">
              <span className="search-current-result-date-text-title">
                {moment(date).format("DD MMM")}
              </span>
              <span className="search-current-result-date-text-subtitle">
                {moment(date).format("ddd")}
              </span>
            </div>
            <button
              className="search-current-result-button"
              onClick={handleNextButton}
            >
              <img src={next} className="search-current-result-arrow" />
            </button>
          </div>
          <button
            className="search-current-result-modify"
            onClick={onModifyClicked}
          >
            Modify
          </button>
        </div>
      </div>
    </>
  );
}
