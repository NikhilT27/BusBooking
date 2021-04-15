import React from "react";

import steering from "../images/steering-wheel.svg";
import EachDeckSeat from "./EachDeckSeat";
import { useSelector, useDispatch } from "react-redux";
import { addSeat, selectSeats } from "../features/seats/seatsSlice";

export default function Deck({ data, type }) {
  const seats = useSelector(selectSeats);
  const dispatch = useDispatch();

  let { _id } = data;

  console.log(seats);
  let seatEvenNumber = [];
  let seatEvenAlphabet = [];
  let seatOddNumber = [];
  let seatOddAlphabet = [];

  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      seatOddNumber.push(i + 1);
      seatOddAlphabet.push(String.fromCharCode(65 + i));
    } else {
      seatEvenNumber.push(i + 1);
      seatEvenAlphabet.push(String.fromCharCode(65 + i));
    }
  }

  // console.log(
  //   `Number: Even - ${seatEvenNumber}, Odd - ${seatOddNumber};; Alphabet: Even - ${seatEvenAlphabet}, Odd - ${seatOddAlphabet}`
  // );

  return (
    <div className="deck">
      <div className="deck-steering">
        {type === "Lower" ? (
          <img src={steering} alt="" className="deck-steering-logo" />
        ) : (
          <div className="deck-steering-logo"></div>
        )}
      </div>
      <div className="deck-seats">
        <div className="deck-seats-row">
          {type === "Lower"
            ? seatOddNumber.map((num) => {
                return (
                  <EachDeckSeat
                    data={data}
                    key={num}
                    id={`${num}A`}
                    busId={_id}
                  />
                );
              })
            : seatEvenNumber.map((num) => {
                return (
                  <EachDeckSeat
                    data={data}
                    key={num}
                    id={`${num}A`}
                    busId={_id}
                  />
                );
              })}
        </div>
        <div className="deck-seats-row">
          {type === "Lower"
            ? seatOddNumber.map((num) => {
                return (
                  <EachDeckSeat
                    data={data}
                    key={num}
                    id={`${num}B`}
                    busId={_id}
                  />
                );
              })
            : seatEvenNumber.map((num) => {
                return (
                  <EachDeckSeat
                    data={data}
                    key={num}
                    id={`${num}B`}
                    busId={_id}
                  />
                );
              })}
        </div>

        <div className="deck-seats-row "></div>
        <div className="deck-seats-row "></div>
        <div className="deck-seats-row">
          {type === "Lower"
            ? seatOddAlphabet.map((letter) => {
                return (
                  <EachDeckSeat
                    data={data}
                    key={letter}
                    id={`${letter}`}
                    busId={_id}
                  />
                );
              })
            : seatEvenAlphabet.map((letter) => {
                return (
                  <EachDeckSeat
                    data={data}
                    key={letter}
                    id={`${letter}`}
                    busId={_id}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}
