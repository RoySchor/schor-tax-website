import React from "react";
import "./InfoPage.module.css";
import FinanceMonitor from "../icons/finance-monitor-icon.png";
import OpenBook from "../icons/open-book-icon.png";
import Handshake from "../icons/handshake-icon.png";

const InfoPage = () => {
  return (
    <section className="infoPage">
      <div className="infoColumn">
        <img src={FinanceMonitor} alt="Technology" className="infoImage" />
        <h2 className="infoTitle">TECHNOLOGY</h2>
        <p className="infoDescription">
          A digital accounting firm, <strong>designed to provide
          a seamless experience</strong> from the comfort of your home.
        </p>
      </div>

      <div className="infoColumn">
        <img src={OpenBook} alt="Expertise" className="infoImage" />
        <h2 className="infoTitle">EXPERTISE</h2>
        <p className="infoDescription">
          We help you understand your tax & financial situation,
          providing guidance to <strong>maximize tax efficiency</strong> &
          achieve your financial goals.
        </p>
      </div>

      <div className="infoColumn">
        <img src={Handshake} alt="Confidence" className="infoImage" />
        <h2 className="infoTitle">CONFIDENCE</h2>
        <p className="infoDescription">
          <strong>Entrust</strong> Schor Tax & Consulting
          for all your <strong>Tax & Accounting</strong> needs so
          you can focus on what’s important.
        </p>
      </div>
    </section>
  );
};

export default InfoPage;
