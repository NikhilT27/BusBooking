import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSeat, selectSeats } from "../features/seats/seatsSlice";

export default function EachDeckSeat({ id, busId }) {
  const seats = useSelector(selectSeats);
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);

  function handleClick(e) {
    dispatch(addSeat({ name: e.target.name, busId: busId }));
    setSelect(!select);
  }

  return (
    <div>
      <button
        name={id}
        className={
          select ? "deck-seats-each deck-seats-each-select" : "deck-seats-each"
        }
        onClick={handleClick}
      >
        {id}
      </button>
    </div>
  );
}
