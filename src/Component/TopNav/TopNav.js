import React from "react";
import { useState } from "react";
import search from "../../assets/search.png";
import "./TopNav.css";
function TopNav() {
  const OpenNav = () => {
    const navBar = document.querySelector(".floatingNav");
    navBar.classList.toggle("open");
  };
  return (
    <div className="NavTop">
      <h1>Chat.Io</h1>
      <div className="profile__menu">
        <img
          src={search}
          className="navOpen"
          onClick={OpenNav}
          alt="profile"
        ></img>
        <ul className="floatingNav">
          <li>
            <button>Profile</button>
          </li>
          <li>
            <button>Setting</button>
          </li>
          <li>
            <button>Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
