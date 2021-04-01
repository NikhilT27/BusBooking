import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ModifyCurrentSearch from "./ModifyCurrentSearch";
import CurrentSearch from "./CurrentSearch";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchBus() {
  let query = useQuery();

  const [from, setFrom] = useState(query.get("from"));
  const [to, setTo] = useState(query.get("to"));
  const [date, setDate] = useState(query.get("date"));
  const [modify, setModify] = useState(false);

  useEffect(() => {}, []);

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
      <div>
        <div>
          Buses <span>Found</span>
        </div>
      </div>
    </>
  );
}
