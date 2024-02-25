import React, { useContext, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
    showEnergySolutionsPopup,
    setShowEnergySolutionsPopup,
    energySolutionsRef,
    buildingPlaceholderText,
    utilityPlaceholderText,
    handleUtilityPlaceholderText,
    valuesForUtilityBill,
    solutionsPlaceholderText,
    handleSolutionsPlaceholderText,
    valuesForSolutions,
  } = useContext(EnermetricsContext);

  let buildingPopupRef = useRef();
  let utilityInListRef = useRef();
  let energyInListRef = useRef();
  let simulateButtonRef = useRef();

  useEffect(() => {
    let handlerOutsideClickFirst = (e) => {
      if (!buildingPopupRef.current?.contains(e.target)) setShowPopup(false);
    };
    let handlerOutsideClickSecond = (e) => {
      if (
        !utilityInListRef.current?.contains(e.target) &&
        !utilityPopupRef.current?.contains(e.target) &&
        !simulateButtonRef.current?.contains(e.target)
      )
        setShowUtilityPopup(false);
    };
    let handlerOutsideClickThird = (e) => {
      if (
        !energySolutionsRef.current?.contains(e.target) &&
        !energyInListRef.current?.contains(e.target) &&
        !simulateButtonRef.current?.contains(e.target)
      )
        setShowEnergySolutionsPopup(false);
    };
    document.addEventListener("click", handlerOutsideClickFirst);
    document.addEventListener("click", handlerOutsideClickSecond);
    document.addEventListener("click", handlerOutsideClickThird);
  }, [
    setShowUtilityPopup,
    utilityPopupRef,
    energySolutionsRef,
    setShowEnergySolutionsPopup,
  ]);

  useEffect(() => {
    handleSolutionsPlaceholderText();
    handleUtilityPlaceholderText();
  }, [
    valuesForUtilityBill,
    handleUtilityPlaceholderText,
    valuesForSolutions,
    handleSolutionsPlaceholderText,
  ]);

  const notify = () => {
    if (
      solutionsPlaceholderText === "Completed" &&
      utilityPlaceholderText === "Completed" &&
      buildingPlaceholderText === "Completed"
    ) {
      toast.loading("Generating offers. Please wait.", {
        duration: 1500,
        id: "clipboard",
        style: {
          maxWidth: "600px",
          color: "#0EA47A",
          background: "white",
          border: "2px solid #0EA47A",
        },
        iconTheme: {
          primary: "#0EA47A",
          secondary: "white",
        },
      });
    } else
      toast.error("Please fill out all fields.", {
        duration: 1500,
        id: "clipboard",
        style: {
          maxWidth: "600px",
          color: "#cd960b",
          background: "white",
          border: "2px solid #cd960b",
        },
        iconTheme: {
          primary: "#cd960b",
          secondary: "white",
        },
      });
  };

  return (
    <section className={styles.simulate_section}>
      <ul className={styles.simulate_section_list}>
        <li
          ref={buildingPopupRef}
          onClick={() => setShowPopup(!showPopup)}
          className={styles.simulate_option}
        >
          <img src={homeLogo} alt="home" />
          <span
            style={{
              color: buildingPlaceholderText === "Completed" ? "#0EA47A" : "",
            }}
          >
            {buildingPlaceholderText}
          </span>
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
          <span
            style={{
              color: utilityPlaceholderText === "Completed" ? "#0EA47A" : "",
            }}
          >
            {utilityPlaceholderText}
          </span>
        </li>
        <li
          ref={energyInListRef}
          onClick={() => setShowEnergySolutionsPopup(!showEnergySolutionsPopup)}
          className={styles.simulate_option}
        >
          <img src={sunLogo} alt="sun" />
          <span
            style={{
              color: solutionsPlaceholderText === "Completed" ? "#0EA47A" : "",
            }}
          >
            {solutionsPlaceholderText}
          </span>
        </li>
        <li
          onClick={notify}
          ref={simulateButtonRef}
          className={styles.simulate_button}
        >
          <img src={simulateLogo} alt="usd" />
          <span>Simulate</span>
          <Toaster
            position="top-center"
            containerStyle={{
              top: 20,
              left: 20,
              bottom: 20,
              right: 20,
            }}
          />
        </li>
      </ul>
    </section>
  );
}

export default SimulateSection;
