import React, { useEffect, useState } from "react";
import "./NavBar.module.css";
import logo from "./assets/SchorTax.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "shrink" : ""}`}>
      <a className="navbarTitle" href="#home">
        <img
          src={logo}
          alt="Schor Tax & Consulting"
          className={`navbarLogo ${scrolled ? "shrink" : ""}`}
        />
      </a>
      <div className="navbarLinks">
        <a className="navbarLink" href="#packages">
          Packages & Pricing
        </a>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <button
            className={`navbarLink dropbtn`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Resources
          </button>
          {dropdownOpen && (
            <div className={`dropdownContent ${scrolled ? "shrink" : ""}`}>
              <a
                href="/Forms/SchorTaxPrepChecklistFillable.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tax Prep Checklist
              </a>
              <a
                href="/Forms/SchortaxClientFormFillable.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Intake Form
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
