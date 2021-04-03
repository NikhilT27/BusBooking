import React from "react";
import powerPlugLogo from "../images/power-plug.svg";
import lightLogo from "../images/light.svg";
import trackLogo from "../images/tracking.svg";
import ticketLogo from "../images/ticket.svg";
import newspaperLogo from "../images/newspaper.svg";
import emergencyCallLogo from "../images/emergency-call.svg";
import blanketsLogo from "../images/bed-sheets.svg";
import pillowLogo from "../images/pillow.svg";
import cctvLogo from "../images/cctv.svg";
import movieLogo from "../images/video.svg";
import tvLogo from "../images/tv.svg";
import wifiLogo from "../images/wifi.svg";
// import bottle from "../images/bottle.svg";
// import mask from "../images/mask.svg";
// import sanitizer from "../images/sanitizer.svg";
// import temperature from "../images/newspaper.svg";
// import clean from "../images/clean.svg";

import EachAmenities from "./EachAmenities";

export default function Amenities({ data }) {
  let {
    blankets,
    cctv,
    charging_point,
    deep_cleaned_bus,
    emergency_contact_number,
    hand_sanitiser_provided,
    mobile_ticket,
    movie,
    newspaper,
    personaltv,
    pillow,
    reading_light,
    regular_temperature_check,
    staff_with_mask,
    track_my_bus,
    water_bottle,
    wifi,
  } = data;
  return (
    <>
      <EachAmenities
        present={charging_point}
        logo={powerPlugLogo}
        title="Charging Point"
      />
      <EachAmenities
        present={reading_light}
        logo={lightLogo}
        title="Reading Light"
      />
      <EachAmenities
        present={track_my_bus}
        logo={trackLogo}
        title="Track My Bus"
      />
      <EachAmenities
        present={mobile_ticket}
        logo={ticketLogo}
        title="Mobile Ticket"
      />
      <EachAmenities
        present={newspaper}
        logo={newspaperLogo}
        title="Newspaper"
      />
      <EachAmenities
        present={emergency_contact_number}
        logo={emergencyCallLogo}
        title="Emergency Contact Number"
      />
      <EachAmenities present={blankets} logo={blanketsLogo} title="Blankets" />
      <EachAmenities present={pillow} logo={pillowLogo} title="Pillow" />
      <EachAmenities present={cctv} logo={cctvLogo} title="CCTV" />
      <EachAmenities present={movie} logo={movieLogo} title="Movie" />
      <EachAmenities present={personaltv} logo={tvLogo} title="Personal TV" />
      <EachAmenities present={wifi} logo={wifiLogo} title="Wifi" />
      {/* <EachAmenities present={water_bottle} logo={bottle} title="Water Bottle" />
      <EachAmenities present={} logo={mask} title="Staff with Mask" />
      <EachAmenities present={} logo={sanitizer} title="Hand Sanitizers Provided" />
      <EachAmenities present={} logo={temperature} title="Regular Temperature Checks" />
      <EachAmenities present={} logo={clean} title="Deep Cleaned Buses" /> */}
    </>
  );
}
