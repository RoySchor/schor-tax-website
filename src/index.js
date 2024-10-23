import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/NavBar/NavBar.js";
import Header from "./components/Header/Header.js";
import InfoPage from "./components/InfoPage/InfoPage.js";
import Packages from "./components/Packages/Packages.js";
import Footer from "./components/Footer/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <InfoPage />
    <Packages />
    <Footer />
  </React.StrictMode>
);
