import React, { createContext, useRef, useState } from "react";

export const EnermetricsContext = createContext();

const EnermetricsContextProvider = ({ children }) => {
  const [showUtilityPopup, setShowUtilityPopup] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [energyOption, setEnergyOption] = useState(null);
  const [showEnergySolutionsPopup, setShowEnergySolutionsPopup] =
    useState(false);

  const utilityPopupRef = useRef(null);
  const energySolutionsRef = useRef(null);
  
  const [valuesForBuilding, setValuesForBuilding] = useState({
    country: "",
    zipCode: "",
    size: "",
    type: "",
  });
  
  const [valuesForUtilityBill, setValuesForUtilityBill] = useState([
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
  ]);
  
  const [buildingPlaceholderText, setBuildingPlaceholderText] =
    useState("Building?");
console.log(valuesForUtilityBill)


  const [utilityPlaceholderText, setUtilityPlaceholderText] =
  useState("Utility bill?");

  const [solutionsPlaceholderText, setSolutionsPlaceholderText] =
  useState("Energy solutions?");
  
  const [valuesForSolutions, setValuesForSolutions] = useState([false, false, false, false, false, false, false, false,])



  const handleSolutionsPlaceholderText = () => {

    if (valuesForSolutions.every((value) => value === false)) {
      setSolutionsPlaceholderText("Energy solutions?");
    }
    if (valuesForSolutions.some((value) => value !== false)) {
      setSolutionsPlaceholderText("Is being completed...");
    }
    if (valuesForSolutions.every((value) => value !== false)) {
      setSolutionsPlaceholderText("Completed");
    }
  }



  const handleUtilityPlaceholderText = () => {
    if (
      valuesForUtilityBill
        .flatMap((subArray) => subArray)
        .every((value) => value === "")
    ) {
      setUtilityPlaceholderText("Utility bill?");
    } else if (
      valuesForUtilityBill.some((subArray) =>
        subArray.some((element) => element === "")
      )
    ) {
      setUtilityPlaceholderText("Is being completed...");
    }  else if (
      valuesForUtilityBill.every(
        (subArray) =>
          subArray.every((element) => element !== "") &&
          startDate &&
          energyOption
      )
    ) {
      setUtilityPlaceholderText("Completed");
    }
  };





  const contextValues = {
    showUtilityPopup,
    setShowUtilityPopup,
    utilityPopupRef,
    showEnergySolutionsPopup,
    setShowEnergySolutionsPopup,
    energySolutionsRef,
    buildingPlaceholderText,
    setBuildingPlaceholderText,
    valuesForBuilding,
    startDate,
    setStartDate,
    energyOption,
    setEnergyOption,
    setValuesForBuilding,
    valuesForUtilityBill,
    setValuesForUtilityBill,
    valuesForSolutions,
    setValuesForSolutions,
    utilityPlaceholderText,
    handleUtilityPlaceholderText,
    solutionsPlaceholderText,
    handleSolutionsPlaceholderText,
  };

  return (
    <EnermetricsContext.Provider value={contextValues}>
      {children}
    </EnermetricsContext.Provider>
  );
};

export default EnermetricsContextProvider;
