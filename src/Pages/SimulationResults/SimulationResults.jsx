import React, { useContext, useState } from "react";
import styles from "./SimulationResults.module.css";
import UtilityBill from "../../Components/PopUps/UtilityBill/UtilityBill";
import EnergySolutions from "../../Components/PopUps/EnergySolutions/EnergySolutions";
import { EnermetricsContext } from "../../Context";
import Offer from "../../Components/Offer/Offer";

function SimulationResults() {
  const {
    showUtilityPopup,
    showEnergySolutionsPopup,
    utilityPopupRef,
    energySolutionsRef,
    generatedOffers,
    setGeneratedOffers,
  } = useContext(EnermetricsContext);

  const [criteria, setCriteria] = useState("PV");

  const handleSelectedCriteria = (criteria) => {
    setCriteria(criteria);
    if (criteria === "PV") {
      setGeneratedOffers((prev) =>
        prev.slice().sort((a, b) => parseFloat(a.pv) - parseFloat(b.pv))
      );
    } else if (criteria === "CHP") {
      setGeneratedOffers((prev) =>
        prev.slice().sort((a, b) => parseFloat(a.chp) - parseFloat(b.chp))
      );
    } else if (criteria === "Net Present Value") {
      setGeneratedOffers((prev) =>
        prev.slice().sort((a, b) => {
          const totalAmountA = parseFloat(a.totalAmount.replace(/[$,]/g, ""));
          const totalAmountB = parseFloat(b.totalAmount.replace(/[$,]/g, ""));
          return totalAmountA - totalAmountB;
        })
      );
    }
  };

  return (
    <section className={styles.simulation_results_section}>
      <div className={styles.simulation_results_content}>
        <div
          ref={utilityPopupRef}
          className={`${styles.utility_bill_popup} ${
            showUtilityPopup ? styles.openedPopup : ""
          }`}
        >
          <UtilityBill />
        </div>
        <div
          ref={energySolutionsRef}
          className={`${styles.energy_options_popup} ${
            showEnergySolutionsPopup ? styles.openedPopup : ""
          }`}
        >
          <EnergySolutions />
        </div>
        <div className={styles.pre_results_option_first}>
          <h2>
            Need an energy strategy? <strong>Book a free Zoom call</strong> with
            our experts.
          </h2>
          <span>Free consult</span>
        </div>
        <div className={styles.pre_results_option_second}>
          <h2>
            <strong>Create a free account</strong>to save your facility and get
            advanced results.
          </h2>
          <span>Create account</span>
        </div>
        <div className={styles.filter_bar}>
          <div className={styles.filter_container_for_padding}>
            <div
              onClick={() => handleSelectedCriteria("PV")}
              style={{ color: criteria === "PV" ? "black" : "#a3a3a3" }}
              className={styles.filter_criteria}
            >
              PV
            </div>
            <div
              onClick={() => handleSelectedCriteria("CHP")}
              style={{ color: criteria === "CHP" ? "black" : "#a3a3a3" }}
              className={styles.filter_criteria}
            >
              CHP
            </div>
            <div
              onClick={() => handleSelectedCriteria("Net Present Value")}
              style={{
                color: criteria === "Net Present Value" ? "black" : "#a3a3a3",
              }}
              className={styles.filter_criteria}
            >
              Net Present Value
            </div>
          </div>
        </div>
        {generatedOffers.map((value, index) => (
          <Offer
            key={index}
            pv={value.pv}
            chp={value.chp}
            totalAmount={value.totalAmount}
            initialCost={value.initialCost}
          />
        ))}
      </div>
    </section>
  );
}

export default SimulationResults;
