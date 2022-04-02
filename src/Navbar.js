import React from "react";
import logoImg from "./Assets/NavLogo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logoImg} alt="Logo" />
        </a>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search items, collections, and accounts"
        />
        <span></span>
      </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Activity</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
        </div>
      </ul>
      <div className="buttons">
        <button className="Button_Account">Account</button>
        <button className="Button_Wallet">Conect Wallet</button>
      </div>
    </nav>
  );
}
