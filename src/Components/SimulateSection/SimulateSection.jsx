import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./SimulateSection.module.css";
import homeLogo from "../Assets/home3.png";
import zapLogo from "../Assets/zap3.png";
import sunLogo from "../Assets/sun1.png";
import simulateLogo from "../Assets/Icon-for-simulate.png";
import BuildingPopUp from "../../Components/PopUps/Building/BuildingPopUp";
import { EnermetricsContext } from "../../Context";

function SimulateSection() {
  const [showPopup, setShowPopup] = useState(false);
  const {
    showUtilityPopup,
    setShowUtilityPopup,
    utilityPopupRef,
    buildingPlaceholderText,
  } = useContext(EnermetricsContext);

  let buildingPopupRef = useRef();
  let utilityInListRef = useRef();

  useEffect(() => {
    let handlerOutsideClickFirst = (e) => {
      if (!buildingPopupRef.current.contains(e.target)) setShowPopup(false);
    };
    let handlerOutsideClickSecond = (e) => {
      if (
        !utilityInListRef.current.contains(e.target) &&
        !utilityPopupRef.current.contains(e.target)
      )
        setShowUtilityPopup(false);
    };
    document.addEventListener("click", handlerOutsideClickFirst);
    document.addEventListener("click", handlerOutsideClickSecond);
  }, [setShowUtilityPopup, utilityPopupRef]);

  return (
    <section className={styles.simulate_section}>
      <ul className={styles.simulate_section_list}>
        <li
          ref={buildingPopupRef}
          onClick={() => setShowPopup(!showPopup)}
          className={styles.simulate_option}
        >
          <img src={homeLogo} alt="home" />
          <span style={{color: buildingPlaceholderText === "Completed"? "green" : ""}}>{buildingPlaceholderText}</span>
          <div
            className={`${styles.building_popup} ${
              showPopup ? styles.openedPopup : ""
            }`}
          >
            <BuildingPopUp />
          </div>
        </li>
        <li
          ref={utilityInListRef}
          onClick={() => setShowUtilityPopup(!showUtilityPopup)}
          className={styles.simulate_option}
        >
          <img src={zapLogo} alt="zap" />
          <span>Utility bill?</span>
        </li>
        <li className={styles.simulate_option}>
          <img src={sunLogo} alt="sun" />
          <span>Energy Solutions?</span>
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
