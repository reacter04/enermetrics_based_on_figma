import React, { useRef, useState } from "react";
import styles from "./UtilityBill.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import calendarIcon from "../../Assets/calendar 1.png";
import gasIcon from "../../Assets/gas 1.png";

function UtilityBill() {
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePiker] = useState(false);
  const inputTagRef = useRef(null);
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

  return (
    <div
      className={styles.utility_bill_container}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.params_options_left_side}>
        <div className={styles.select_top}>
          {showDatePicker && (
            <span>
              <ReactDatePicker
                selected={startDate}
                autoFocus={showDatePicker}
                onClickOutside={(e) => {
                  if (!inputTagRef.current.contains(e.target))
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
        <ul className={styles.left_info_bottom_container}>
          <li>
            <span></span>
            <div className={styles.title_input_fields}>
              <div className={styles.title_container}>Electricity</div>
              <div className={styles.title_container}>Gas</div>
            </div>
          </li>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((value, index) => {
            return (
              <li key={index}>
                <span>
                  {formatDate(addMonths(value), "long") || "--------"}
                </span>
                <div className={styles.input_fields_container}>
                  <div className={styles.input_fields_for_padding}>
                    <div className={styles.for_each_input_container}>
                      <input type="number" placeholder="kWh" />
                    </div>
                    <div className={styles.for_each_input_container}>
                      <input type="number" placeholder="m&#179;" />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.params_options_right_side}>
        <div className={styles.select_top}>
          <div className={styles.input_energy_tag}>
            <img src={gasIcon} alt="calendarIcon" />
            <span className={styles.select_energy_button}>
              m<sup>3</sup>/GJ/thm
            </span>
            <div className={styles.select_energy_options}>
              <span>m<sup>3</sup></span>
              <span>GJ</span>
              <span>thm</span>
            </div>
          </div>
        </div>

        <ul className={styles.left_info_bottom_container}>
          <li>
            <span></span>
            <div className={styles.title_input_fields}>
              <div className={styles.title_container}>Electricity</div>
              <div className={styles.title_container}>Gas</div>
            </div>
          </li>
          {Array.from({ length: 6 }, (_, i) => i + 7).map((value, index) => {
            return (
              <li key={index}>
                <span>
                  {formatDate(addMonths(value), "long") || "--------"}
                </span>
                <div className={styles.input_fields_container}>
                  <div className={styles.input_fields_for_padding}>
                    <div className={styles.for_each_input_container}>
                      <input type="number" placeholder="kWh" />
                    </div>
                    <div className={styles.for_each_input_container}>
                      <input type="number" placeholder="m&#179;" />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UtilityBill;
