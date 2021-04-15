import React from "react";
import logo from "../images/bus-side-view-grey.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import moment from "moment";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logo} className="footer-logo" />
        <p className="footer-para">
          thunderBirdBus is the world's largest online bus ticket booking
          service trusted by over 18 million happy customers globally.
          thunderBirdBus offers bus ticket booking through its website,iOS and
          Android mobile apps for all major routes. (Fake information for demo)
        </p>
        <div className="footer-media-box">
          <a>
            <button className="footer-media">
              <img src={facebook} className="footer-media-logo"></img>
            </button>
          </a>
          <a>
            <button className="footer-media">
              <img src={twitter} className="footer-media-logo"></img>
            </button>
          </a>
        </div>
        <p className="footer-para">
          {" "}
          Ⓒ {moment().format("YYYY")} NikhilT27 All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}
