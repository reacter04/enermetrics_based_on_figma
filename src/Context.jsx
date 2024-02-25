import React, { createContext, useRef, useState } from "react";

export const EnermetricsContext = createContext();

const EnermetricsContextProvider = ({ children }) => {
  const [showUtilityPopup, setShowUtilityPopup] = useState(false);
  const [showEnergySolutionsPopup, setShowEnergySolutionsPopup] = useState(false)
  const utilityPopupRef = useRef(null);
  const energySolutionsRef = useRef(null)
  const [buildingPlaceholderText, setBuildingPlaceholderText] =
    useState("Building?");


  const contextValues = {
    showUtilityPopup,
    setShowUtilityPopup,
    utilityPopupRef,
    showEnergySolutionsPopup,
    setShowEnergySolutionsPopup,
    energySolutionsRef,
    buildingPlaceholderText,
    setBuildingPlaceholderText,
  };

  return (
    <EnermetricsContext.Provider value={contextValues}>
      {children}
    </EnermetricsContext.Provider>
  );
};

export default EnermetricsContextProvider;
