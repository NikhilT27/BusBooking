import React, { useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import moment from "moment";

import rightArrow from "../images/right.svg";
import next from "../images/next.svg";
import SearchForm from "./SearchForm";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchBus() {
  let query = useQuery();
  let history = useHistory();

  const [modify, setModify] = useState(false);
  const [from, setFrom] = useState(query.get("from"));
  const [to, setTo] = useState(query.get("to"));
  const [date, setDate] = useState(query.get("date"));

  console.log(`Query: ${query.get("name")} `);

  function handlePreviousButton() {
    console.log("previous button clicked");
    setDate(moment(date).subtract(1, "d").format("YYYY-MM-DD"));
    history.push(`/search?from=${from}&to=${to}&date=${date}`);
  }

  function handleNextButton() {
    console.log("previous button clicked");
    setDate(moment(date).add(1, "d").format("YYYY-MM-DD"));
    history.push(`/search?from=${from}&to=${to}&date=${date}`);
  }

  return (
    <>
      <div className="search-current">
        {modify ? (
          <div>
            <SearchForm />
          </div>
        ) : (
          <div className="search-current-result">
            <span>{from}</span>
            <img src={rightArrow} className="search-current-result-arrow" />
            <span>{to}</span>
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
              onClick={() => {
                setModify(!modify);
              }}
            >
              Modify
            </button>
          </div>
        )}
      </div>
    </>
  );
}
