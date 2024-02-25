import React, { useContext, useEffect, useRef, useState } from "react";
import { EnermetricsContext } from "../../../Context";
import styles from "./UtilityBill.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import calendarIcon from "../../Assets/calendar 1.png";
import gasIcon from "../../Assets/gas 1.png";

function UtilityBill() {
  const [showDatePicker, setShowDatePiker] = useState(false);
  const [showOptionsEnergy, setShowOptionsEnergy] = useState(false);

  const {
    valuesForUtilityBill,
    setValuesForUtilityBill,
    startDate,
    setStartDate,
    energyOption,
    setEnergyOption,
  } = useContext(EnermetricsContext);

  const inputTagRef = useRef(null);
  const energyOptionsRef = useRef(null);
  const energyTagButton = useRef(null);

  useEffect(() => {
    let handlerOutsideClick = (e) => {
      if (
        !energyOptionsRef.current?.contains(e.target) &&
        !energyTagButton.current?.contains(e.target)
      ) {
        setShowOptionsEnergy(false);
      }
    };
    document.addEventListener("click", handlerOutsideClick);
  }, []);

  const oldDate = new Date(startDate);
  const addMonths = (numOfMonths) => {
    if (!startDate) {
      return null;
    }
    const newDate = new Date(startDate);
    newDate.setMonth(newDate.getMonth() + numOfMonths);
    return newDate;
  };

  const formatDate = (date, typeOfString) => {
    if (!date) return;
    if (date) {
      return date
        .toLocaleDateString("en-US", {
          month: `${typeOfString}`,
          year: "2-digit",
        })
        .replace(" ", " '");
    }
  };

  const handleChangeInputDate = (date) => {
    setStartDate(date);
    setShowDatePiker(false);
  };

  const handleSelectedOption = (option) => {
    setEnergyOption(option);
    setShowOptionsEnergy(false);
  };

  return (
    /**/
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "1px 1px 3px 0.5px rgb(237, 237, 237)",
        padding: "30px 35px",
        gap: "10px",
      }}
    >
      <div className={styles.utility_bill_container}>
        <div className={styles.params_options_left_side}>
          <div className={styles.select_top_left}>
            {showDatePicker && (
              <span onClick={(e) => e.stopPropagation()}>
                <ReactDatePicker
                  selected={startDate}
                  autoFocus={showDatePicker}
                  onClickOutside={(e) => {
                    if (!inputTagRef.current?.contains(e.target))
                      setShowDatePiker(false);
                  }}
                  onChange={(date) => handleChangeInputDate(date)}
                  showYearDropdown
                />
              </span>
            )}
            <div className={styles.input_info_tag}>
              <img src={calendarIcon} alt="calendarIcon" />
              <span
                className={styles.input_info_tag_button}
                ref={inputTagRef}
                onClick={() => {
                  setShowDatePiker(!showDatePicker);
                }}
              >
                {!startDate
                  ? "Month/Year"
                  : `${formatDate(oldDate, "short")} -
              ${formatDate(addMonths(11), "short")}`}
              </span>
            </div>
          </div>
          <ul className={styles.values_info_container}>
            <li>
              <span></span>
              <div className={styles.title_input_fields}>
                <div className={styles.title_container}>Electricity</div>
                <div className={styles.title_container}>Gas</div>
              </div>
            </li>
            {valuesForUtilityBill
              .slice(0, valuesForUtilityBill.length / 2)
              .map((_, index) => {
                return (
                  <li key={index}>
                    <span>
                      {formatDate(addMonths(index), "long") || "--------"}
                    </span>
                    <div className={styles.input_fields_container}>
                      <div className={styles.input_fields_for_padding}>
                        <div className={styles.for_each_input_container}>
                          <input
                            onChange={(e) => {
                              setValuesForUtilityBill((prev) =>
                                prev.map((v, i) =>
                                  i === index ? [e.target.value, v[1]] : v
                                )
                              );
                            }}
                            type="number"
                            placeholder="kWh"
                          />
                        </div>
                        <div className={styles.for_each_input_container}>
                          <input
                            onChange={(e) => {
                              setValuesForUtilityBill((prev) =>
                                prev.map((v, i) =>
                                  i === index ? [v[0], e.target.value] : v
                                )
                              );
                            }}
                            type="number"
                            placeholder={
                              energyOption ? energyOption : "m³/GJ/thm"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* incepe partea dreapta a popupului */}
        <div className={styles.params_options_right_side}>
          <div className={styles.select_top_right}>
            <div className={styles.input_energy_tag}>
              <img src={gasIcon} alt="calendarIcon" />
              <span
                ref={energyTagButton}
                style={{ color: energyOption ? "black" : "#a3a3a3" }}
                className={
                  !showOptionsEnergy
                    ? styles.select_energy_button
                    : `${styles.select_energy_button} ${styles.open}`
                }
                onClick={() => setShowOptionsEnergy(!showOptionsEnergy)}
              >
                {energyOption ? (
                  energyOption
                ) : (
                  <>
                    m<sup>3</sup>/GJ/thm
                  </>
                )}
              </span>
              <div
                ref={energyOptionsRef}
                className={
                  showOptionsEnergy
                    ? `${styles.select_energy_options} ${styles.visible}`
                    : styles.select_energy_options
                }
              >
                <span onClick={() => handleSelectedOption("m³")}>
                  m<sup>3</sup>
                </span>
                <span onClick={() => handleSelectedOption("GJ")}>GJ</span>
                <span onClick={() => handleSelectedOption("thm")}>thm</span>
              </div>
            </div>
          </div>
          <ul className={styles.values_info_container}>
            <li>
              <span></span>
              <div className={styles.title_input_fields}>
                <div className={styles.title_container}>Electricity</div>
                <div className={styles.title_container}>Gas</div>
              </div>
            </li>
            {valuesForUtilityBill
              .slice(valuesForUtilityBill.length / 2)
              .map((_, index) => {
                return (
                  <li key={index}>
                    <span>
                      {formatDate(addMonths(index + 6), "long") || "--------"}
                    </span>
                    <div className={styles.input_fields_container}>
                      <div className={styles.input_fields_for_padding}>
                        <div className={styles.for_each_input_container}>
                          <input
                            onChange={(e) => {
                              setValuesForUtilityBill((prev) =>
                                prev.map((v, i) =>
                                  i === index + 6 ? [e.target.value, v[1]] : v
                                )
                              );
                            }}
                            type="number"
                            placeholder="kWh"
                          />
                        </div>
                        <div className={styles.for_each_input_container}>
                          <input
                            onChange={(e) => {
                              setValuesForUtilityBill((prev) =>
                                prev.map((v, i) =>
                                  i === index + 6 ? [v[0], e.target.value] : v
                                )
                              );
                            }}
                            type="number"
                            placeholder={
                              energyOption ? energyOption : "m³/GJ/thm"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className={styles.information_container}>
        <div>?</div>
        <div>
          <h3>Don’t have your utility bills nearby? Just leave this blank. </h3>
          <p>
            We’ll estimate your building’s energy consumption by comparing its
            type, size, and location to a database of 3,344 total building
            models. Later you can enter or upload your actual utility data for
            best results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UtilityBill;
