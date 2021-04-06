import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import ModifyCurrentSearch from "./ModifyCurrentSearch";
import CurrentSearch from "./CurrentSearch";
import EachBusData from "./EachBusData";
import Loading from "./Loading";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchBus() {
  let query = useQuery();

  const [from, setFrom] = useState(query.get("from"));
  const [to, setTo] = useState(query.get("to"));
  const [date, setDate] = useState(query.get("date"));
  const [modify, setModify] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();

    fetchData(source);

    return () => {
      source.cancel("Cancelling in cleanup");
    };
  }, []);

  async function fetchData(source) {
    const response = await axios.get(`/bus/search?to=${to}&from=${from}`, {
      cancelToken: source.token,
    });

    if (response) {
      console.log(response.data);
      setData(response.data);
    }
  }

  function onModifyClicked() {
    setModify(!modify);
  }

  return (
    <>
      <div className="search-current">
        {modify ? (
          <div>
            <ModifyCurrentSearch
              onModifyClicked={onModifyClicked}
              from={from}
              to={to}
              date={date}
            />
          </div>
        ) : (
          <CurrentSearch
            onModifyClicked={onModifyClicked}
            from={from}
            to={to}
            date={date}
          />
        )}
      </div>
      <div className="result">
        {data.length === 0 ? (
          <Loading />
        ) : (
          <div>
            <h3>
              {data.length} Buses <span className="result-count">Found</span>
            </h3>
            {data.length != 0 &&
              data.map((eachbus) => {
                return <EachBusData key={eachbus._id} data={eachbus} />;
              })}
          </div>
        )}
      </div>
    </>
  );
}
