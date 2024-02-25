import React, { useContext } from "react";
import styles from "./EnergySolutions.module.css";
import cornerDownIcon from "../../Assets/corner-down-right 1.png";
import { EnermetricsContext } from "../../../Context";

function EnergySolutions() {
  const { setValuesForSolutions } = useContext(EnermetricsContext);

  const handleChangeCheckbox = (checkbox) => {
    setValuesForSolutions((prev) =>
      prev.map((value, index) => (index === checkbox ? !value : value))
    );
  };

  return (
    <div className={styles.energy_solutions}>
      <p>
        Select specific energy solutions you want to simulate for your facility,
        or simply try them all!
      </p>
      <div className={styles.energy_options_container}>
        <div className={styles.energy_options_left_side}>
          <h2>Energy generation</h2>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Solar panels(PV)</h3>
              <p>Electricity from sunlight</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(0)} type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Ground Wind Turbines (GWT)</h3>
              <p>Electricity from wind</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(1)} type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Vertical Wind Turbines (VWT)</h3>
              <p>Electricity from wind</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(2)} type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Geothermal (Geo)</h3>
              <p>Electricity and heat from Earth</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(3)} type="checkbox" />
              <span></span>
            </label>
          </div>
        </div>
        {/*aici incepe partea dreapta*/}
        <div className={styles.energy_options_right_side}>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Cogeneration (CHP)</h3>
              <p>Electricity and heat from gas turbines</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(4)} type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Solar thermal (ST)</h3>
              <p>Electricity and heat from sunlight</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(5)} type="checkbox" />
              <span></span>
            </label>
          </div>
          <h2>Energy storage</h2>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Batteries (Bat)</h3>
              <p>Electricity storage</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(6)} type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className={styles.checkbox_each_container}>
            <img src={cornerDownIcon} alt="cornerIcon" />
            <div className={styles.checkbox_option_text_container}>
              <h3>Gas tank (GT)</h3>
              <p>Gas storage</p>
            </div>
            <label>
              <input onChange={() => handleChangeCheckbox(7)} type="checkbox" />
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergySolutions;
