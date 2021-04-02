import React from "react";

import steering from "../images/steering-wheel.svg";
import EachDeckSeat from "./EachDeckSeat";

export default function Deck() {
  return (
    <div className="deck">
      <div className="deck-steering">
        <img src={steering} alt="" className="deck-steering-logo" />
      </div>
      <div className="deck-seats">
        <div className="deck-seats-row">
          <EachDeckSeat id="1A" />
          <button name="3A" className="deck-seats-each">
            3A
          </button>
          <button name="5A" className="deck-seats-each">
            5A
          </button>
          <button className="deck-seats-each">7A</button>
          <button className="deck-seats-each">9A</button>
        </div>
        <div className="deck-seats-row">
          <button className="deck-seats-each">1B</button>
          <button className="deck-seats-each">3B</button>
          <button className="deck-seats-each">5B</button>
          <button className="deck-seats-each">7B</button>
          <button className="deck-seats-each">9B</button>
        </div>

        <div className="deck-seats-row"></div>
        <div className="deck-seats-row"></div>
        <div className="deck-seats-row">
          <button className="deck-seats-each">A</button>
          <button className="deck-seats-each">C</button>
          <button className="deck-seats-each">E</button>
          <button className="deck-seats-each">F</button>
          <button className="deck-seats-each">G</button>
        </div>
      </div>
    </div>
  );
}
