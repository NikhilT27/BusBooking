import React from "react";

export default function EachDeckSeat({ id }) {
  return (
    <div>
      <button className="deck-seats-each">{id}</button>
    </div>
  );
}
