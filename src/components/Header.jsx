import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          
          <img
            src="src\assets\Crop_Logo.jpeg"
            alt="Cropset logo"
            className="brand-logo"
          />
          <span className="brand-title">Hi Farmer!</span>
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#add-crop">Add Crop</a>
            </li>
            <li>
              <a href="#crop-categories">Crop Types</a>
            </li>
            <li>
              <a href="#my-crops">My Crops</a>
            </li>
            <li>
              <a href="#contracts">My Contracts</a>
            </li>
            <li>
              <a href="#messages">Messages</a>
            </li>
            <li id="profileMenu" className="profile-menu">
              <button
                id="profileBtn"
                className="profile-btn"
                aria-haspopup="true"
              >
                <img
                  id="navbarProfilePic"
                  className="avatar-sm"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="profile"
                />
                <span className="profile-label">Profile</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-gradient"></div>
    </header>
  );
}
