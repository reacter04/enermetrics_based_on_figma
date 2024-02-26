import React, { createContext, useRef, useState } from "react";

export const EnermetricsContext = createContext();

const offers = [
  { pv: "9,500 kW", chp: "12,500 kW", totalAmount: "$742,000" },
  { pv: "12,500 kW", chp: "16,500 kW", totalAmount: "$985,500" },
  { pv: "14,500 kW", chp: "18,000 kW", totalAmount: "$1,180,000" },
];

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

  const [valuesForSolutions, setValuesForSolutions] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [generatedOffers, setGeneratedOffers] = useState(offers);

  const [buildingPlaceholderText, setBuildingPlaceholderText] =
    useState("Building?");

  const [utilityPlaceholderText, setUtilityPlaceholderText] =
    useState("Utility bill?");

  const [solutionsPlaceholderText, setSolutionsPlaceholderText] =
    useState("Energy solutions?");

  const handleSolutionsPlaceholderText = () => {
    if (valuesForSolutions.every((value) => value === false)) {
      setSolutionsPlaceholderText("Energy solutions?");
    }
    if (valuesForSolutions.some((value) => value !== false)) {
      setSolutionsPlaceholderText("Completed");
    }
  };

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
    } else if (
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
    generatedOffers,
    setGeneratedOffers,
  };

  return (
    <EnermetricsContext.Provider value={contextValues}>
      {children}
    </EnermetricsContext.Provider>
  );
};

export default EnermetricsContextProvider;
