import React, { useContext, useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import styles from "./BuildingPopUp.module.css";
import flagLogo from "../../Assets/flag1.png";
import pinLogo from "../../Assets/map-pin.png";
import maximizeLogo from "../../Assets/maximize.png";
import homeLogo from "../../Assets/home3.png";
import { EnermetricsContext } from "../../../Context";

function BuildingPopUp() {
  const options = useMemo(() => countryList().getData(), []);
  const {setBuildingPlaceholderText } =
    useContext(EnermetricsContext);
  const [valuesForBuilding, setValuesForBuilding] = useState({
    country: "",
    zipCode: "",
    size: "",
    type: "",
  });

  const handlePopupDetails = (e) => {
    switch (e.target.name) {
      case "size":
        setValuesForBuilding((object) => ({
          ...object,
          size: e.target.value,
        }));
        break;
      case "type":
        setValuesForBuilding((object) => ({
          ...object,
          type: e.target.value,
        }));
        break;
      case "country":
        setValuesForBuilding((object) => ({
          ...object,
          country: e.target.value,
        }));
        break;
      case "zipCode":
        setValuesForBuilding((object) => ({
          ...object,
          zipCode: e.target.value,
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (Object.values(valuesForBuilding).every((value) => value === "")) {
      setBuildingPlaceholderText("Building?");
    }
    if (Object.values(valuesForBuilding).some((value) => value !== "")) {
      setBuildingPlaceholderText("Is being completed...");
    }
    if (Object.values(valuesForBuilding).every((value) => value !== "")) {
      setBuildingPlaceholderText("Completed");
    }
  }, [setBuildingPlaceholderText, valuesForBuilding]);

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
            <select name="country" onChange={(e) => handlePopupDetails(e)}>
              <option value="" hidden></option>
              {options.map((country, index) => (
                <option key={index} value={country.label}>
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
            <input
              name="zipCode"
              type="text"
              onChange={(e) => handlePopupDetails(e)}
            />
          </div>
        </li>
        <li>
          <img src={maximizeLogo} alt="maximize" />
          <span>
            Size<sup>2</sup>
          </span>
          <div>
            <input className={styles.input_number}
              name="size"
              onChange={(e) => handlePopupDetails(e)}
              type="number"
              min={0}
            />
          </div>
        </li>
        <li>
          <img src={homeLogo} alt="maximize" />
          <span>Type</span>
          <div className={styles.select_container}>
            <select name="type" onChange={(e) => handlePopupDetails(e)}>
              <option value="" hidden></option>
              <option value="House">House</option>
              <option value="Warehouse">Warehouse</option>
              <option value="Commercial space">Commercial space</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BuildingPopUp;
