import React from "react";
import { useLocation } from "react-router-dom";

export default function BookedTickets() {
  const location = useLocation();
  let ticketInfo = location.state.tickets;

  return (
    <div>
      <h1>Booked Tickets</h1>
      {ticketInfo.map((each) => {
        console.log(each);
      })}
    </div>
  );
}
