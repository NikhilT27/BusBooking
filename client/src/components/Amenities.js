import React from "react";
import powerPlug from "../images/power-plug.svg";
import light from "../images/light.svg";
import track from "../images/tracking.svg";
import ticket from "../images/ticket.svg";
import newspaper from "../images/newspaper.svg";
import emergencyCall from "../images/emergency-call.svg";
import blankets from "../images/bed-sheets.svg";
import pillow from "../images/pillow.svg";
import cctv from "../images/cctv.svg";
import movie from "../images/video.svg";
import tv from "../images/tv.svg";
import wifi from "../images/wifi.svg";
// import bottle from "../images/bottle.svg";
// import mask from "../images/mask.svg";
// import sanitizer from "../images/sanitizer.svg";
// import temperature from "../images/newspaper.svg";
// import clean from "../images/clean.svg";

import EachAmenities from "./EachAmenities";

export default function Amenities() {
  return (
    <>
      <EachAmenities logo={powerPlug} title="Charging Point" />
      <EachAmenities logo={light} title="Reading Light" />
      <EachAmenities logo={track} title="Track My Bus" />
      <EachAmenities logo={ticket} title="Mobile Ticket" />
      <EachAmenities logo={newspaper} title="Newspaper" />
      <EachAmenities logo={emergencyCall} title="Emergency Contact Number" />
      <EachAmenities logo={blankets} title="Blankets" />
      <EachAmenities logo={pillow} title="Pillow" />
      <EachAmenities logo={cctv} title="CCTV" />
      <EachAmenities logo={movie} title="Movie" />
      <EachAmenities logo={tv} title="Personal TV" />
      <EachAmenities logo={wifi} title="Wifi" />
      {/* <EachAmenities logo={bottle} title="Water Bottle" />
      <EachAmenities logo={mask} title="Staff with Mask" />
      <EachAmenities logo={sanitizer} title="Hand Sanitizers Provided" />
      <EachAmenities logo={temperature} title="Regular Temperature Checks" />
      <EachAmenities logo={clean} title="Deep Cleaned Buses" /> */}
    </>
  );
}
