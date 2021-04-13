import React, { useState } from "react";
import { Link } from "react-router-dom";

import user from "../images/user.svg";
import bus from "../images/bus-side-view-white.svg";
import busDark from "../images/bus-dark.svg";
import arrow from "../images/arrow-down.svg";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="header-box">
      <Link to="/">
        <img src={bus} alt="BusBooking" className="header-logo" />
      </Link>
      <div className="header-user">
        <button
          className="header-user-box"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <img src={user} alt="" className="header-user-logo" />
          <img
            src={arrow}
            alt=""
            className={
              openDropdown
                ? "header-dropdown-arrow-open"
                : "header-dropdown-arrow"
            }
          />
        </button>
        {openDropdown ? (
          <ul className="header-dropdown">
            <li>
              <button
                className="header-dropdown-button"
                onClick={() => console.log("SignIn")}
              >
                SignIn
              </button>
            </li>
            <li>
              <button
                className="header-dropdown-button"
                onClick={() => console.log("Register")}
              >
                Register
              </button>
            </li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
