import React from "react";

import { useParams } from "react-router-dom";

export default function SearchBus() {
  let { from, to, date } = useParams();
  return (
    <div>
      Now showing post {from} {to} {date}
    </div>
  );
}
