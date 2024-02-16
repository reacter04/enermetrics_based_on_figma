import React, { useMemo, } from "react";
import countryList from "react-select-country-list";
import styles from "./BuildingPopUp.module.css";
import flagLogo from "../Assets/flag1.png";
import pinLogo from "../Assets/map-pin.png";
import maximizeLogo from "../Assets/maximize.png";
import homeLogo from "../Assets/home3.png";

function BuildingPopUp() {
  const options = useMemo(() => countryList().getData(), []);


  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={styles.building_container}
    >
      <ul className={styles.options_list}>
        <li>
          <img src={flagLogo} alt="flag" />
          <span>Country</span>
          <div className={styles.select_container}>
            <select name="" id="">
              <option value="" hidden></option>
              {options.map((country, index) => (
                <option key={index}>
                  {country.label.length < 25
                    ? country.label
                    : `${country.label.split("").slice(0, 25).join("")}...`}
                </option>
              ))}
            </select>
          </div>
        </li>
        <li>
          <img src={pinLogo} alt="pin" />
          <span>Zip code</span>
          <div>
            <input type="text" />
          </div>
        </li>
        <li>
          <img src={maximizeLogo} alt="maximize" />
          <span>
            Size<sup>2</sup>
          </span>
          <div>
            <input type="number" min={0} />
          </div>
        </li>
        <li>
          <img src={homeLogo} alt="maximize" />
          <span>Type</span>
          <div className={styles.select_container}>
            <select name="" id="">
              <option value="" hidden></option>
              <option value="">House</option>
              <option value="">Warehouse</option>
              <option value="">Commercial space</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BuildingPopUp;
