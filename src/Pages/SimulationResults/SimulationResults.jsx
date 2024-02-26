import React, { useContext } from "react";
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
  } = useContext(EnermetricsContext);

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
            <div className={styles.filter_criteria}>PV</div>
            <div className={styles.filter_criteria}>CHP</div>
            <div className={styles.filter_criteria}>Net Present Value</div>
          </div>
        </div>
        <Offer/>
      </div>
    </section>
  );
}

export default SimulationResults;
