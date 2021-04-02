import React from "react";

export default function EachAmenities({ logo, title }) {
  return (
    <div className="result-each-amenities-each">
      <img
        src={logo}
        alt=""
        className="result-each-amenities-each-logo"
        title={title}
      />
    </div>
  );
}
