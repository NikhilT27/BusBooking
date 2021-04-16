import React from "react";
import logo from "../images/bus-side-view-grey.svg";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import moment from "moment";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logo} className="footer-logo" />
        <p className="footer-para">
          NonRed Bus is the world's largest online bus ticket booking service
          trusted by over 18 million happy customers globally. NonRed Bus offers
          bus ticket booking through its website for all major routes. (Fake
          information for demo)
        </p>
        <div className="footer-media-box">
          <a target="_blank" href="https://github.com/NikhilT27">
            <button className="footer-media">
              <img src={github} className="footer-media-logo"></img>
            </button>
          </a>
          <a href="/">
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
