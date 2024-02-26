import React, { useState } from "react";
import styles from "./Offer.module.css";
import heartIcon from "../Assets/heart.png";
import greenHeartIcon from "../Assets/green_heart.png";
import storageIcon from "../Assets/istockphoto-1390244722-612x612 3.png";
import panelIcon from "../Assets/solar-panel-isometric-icon-design-vector 4.png";

function Offer() {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.offer_container}>
      <div className={styles.type_of_energy_products}>
        <div className={styles.energy_generation_basic_info}>
          <img src={panelIcon} alt="storageIcon" />
          <div className={styles.product_basic_text}>
            <span>
              <strong>PV</strong>
            </span>
            <span>9,500 kW</span>
          </div>
        </div>
        <div className={styles.energy_storage_basic_info}>
          <img src={storageIcon} alt="storageIcon" />
          <div className={styles.product_basic_text}>
            <span>
              <strong>CHP</strong>
            </span>
            <span>12,500 kW</span>
          </div>
        </div>
      </div>
      <div className={styles.product_details}>1</div>
      <div className={styles.product_costs}>
        <span>
          <strong> Installation cost</strong>
        </span>
        <span>$179,000</span>
        <span>
          <strong>Net Present Value</strong>
        </span>
        <span>$742,000</span>
        <span>Request quotes</span>
      </div>
      <img
        onClick={() => setLiked(!liked)}
        className={styles.heart_icon}
        src={!liked ? heartIcon : greenHeartIcon}
        alt="heartIcon"
      />
    </div>
  );
}

export default Offer;
