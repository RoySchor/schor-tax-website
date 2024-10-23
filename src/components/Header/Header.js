import React from "react";
import "./Header.module.css";
import headerBackground from "./assets/header-background.jpg";
import ScheduleMeetingButton from "./components/ScheduleMeetingButton/ScheduleMeetingButton";

const Header = () => {
  return (
    <header className="header" id="home" style={{ backgroundImage: `url(${headerBackground})` }}>
      <h1>
        Focused on Tax Returns, Consulting, & Business Accounting Services
      </h1>

      <ScheduleMeetingButton />
    </header>
  );
};

export default Header;
