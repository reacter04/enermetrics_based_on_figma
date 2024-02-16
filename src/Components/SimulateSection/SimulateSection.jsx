import React, { useEffect, useRef, useState } from "react";
import styles from "./SimulateSection.module.css";
import homeLogo from "../Assets/home3.png";
import zapLogo from "../Assets/zap3.png";
import sunLogo from "../Assets/sun1.png";
import dollarLogo from "../Assets/dollar-sign1.png";
import simulateLogo from "../Assets/Icon-for-simulate.png";
import BuildingPopUp from "../PopUps/BuildingPopUp";

function SimulateSection() {
  const [showPopup, setShowPopup] = useState(false);
  let popupRef = useRef();

  useEffect(() => {
    let handlerOutsideClick = (e) => {
      if (!popupRef.current.contains(e.target)) setShowPopup(false);
    };
    document.addEventListener("click", handlerOutsideClick);
  }, []);


  return (
    <section ref={popupRef} className={styles.simulte_section}>
      <ul className={styles.simulate_section_list}>
        <li
          onClick={() => setShowPopup(!showPopup)}
          className={styles.simulate_option}
        >
          <img src={homeLogo} alt="home" />
          <span>Building?</span>
          <div
            className={`${styles.popup} ${showPopup ? styles.openedPopup : ""}`}
          >
            <BuildingPopUp />
          </div>
        </li>
        <li className={styles.simulate_option}>
          <img src={zapLogo} alt="zap" />
          <span>Utility bill?</span>
        </li>
        <li className={styles.simulate_option}>
          <img src={sunLogo} alt="sun" />
          <span>Energy Solutions?</span>
        </li>
        <li className={styles.simulate_option}>
          <img src={dollarLogo} alt="usd" />
          <span>Buget?</span>
        </li>
        <li className={styles.simulate_button}>
          <img src={simulateLogo} alt="usd" />
          <span>Simulate</span>
        </li>
      </ul>
    </section>
  );
}

export default SimulateSection;
