import React from "react";
import styles from "../CalculationInfographic/CalculationInfographic.module.css";
import drumperLogo from "../Assets/drumper.png";
import solarLogoOne from "../Assets/Solar-Power-PNG-File 1.png";
import solarLogoTwo from "../Assets/Solar-Power-PNG-File 2.png";
import powerwallLogo from "../Assets/Powerwall+Transparent 2.png";
import firstGraphic from "../Assets/first_graphic.png";
import secondGraphic from "../Assets/second_graphic.png";

function CalculationInfographic() {
  return (
    <div className={styles.calculation_infographic}>
      <div className={styles.graphic_container}>
        <div className={styles.images_infographic}>
          <img src={drumperLogo} alt="drumperLogo" />
          <img src={solarLogoOne} alt="solarLogoOne" />
          <img src={solarLogoTwo} alt="solarLogoTwo" />
          <img src={powerwallLogo} alt="powerwallLogoOne" />
          <img src={powerwallLogo} alt="powerwallLogoTwo" />
          <img src={powerwallLogo} alt="powerwallLogoThree" />
        </div>
        <div className={styles.calculation_info_container}>
          <img src={firstGraphic} alt="firstGraphic" />
          <img src={secondGraphic} alt="secondGraphic" />
        </div>
      </div>
    </div>
  );
}

export default CalculationInfographic;
