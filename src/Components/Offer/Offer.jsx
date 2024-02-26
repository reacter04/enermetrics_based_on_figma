import React, { useState } from "react";
import styles from "./Offer.module.css";
import heartIcon from "../Assets/heart.png";
import greenHeartIcon from "../Assets/green_heart.png";
import storageIcon from "../Assets/istockphoto-1390244722-612x612 3.png";
import panelIcon from "../Assets/solar-panel-isometric-icon-design-vector 4.png";

function Offer({ pv, chp, initialCost, totalAmount }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.offer_container}>
      <div className={styles.energy_products}>
        <div className={styles.energy_generation_basic_info}>
          <div className={styles.icon_energy_conainer}>
            <img src={panelIcon} alt="panelIcons" />
          </div>
          <div className={styles.product_basic_text}>
            <span>
              <strong>PV</strong>
            </span>
            <span>{pv}</span>
          </div>
        </div>
        <div className={styles.energy_storage_basic_info}>
          <div className={styles.icon_energy_conainer}>
            <img src={storageIcon} alt="storageIcon" />
          </div>
          <div className={styles.product_basic_text}>
            <span>
              <strong>CHP</strong>
            </span>
            <span>{chp}</span>
          </div>
        </div>
      </div>
      <div className={styles.product_details}>
        <div className={styles.energy_type}>
          <span></span>
          <strong>
            <span>Electricity (kWh)</span>
          </strong>
          <strong>
            <span>Gas (m3)</span>
          </strong>
          <strong>
            <span>Energy bill ($)</span>
          </strong>
          <strong>
            <span>CO2e (mt)</span>
          </strong>
        </div>
        <div className={styles.energy_values_container}>
          <div className={styles.energy_values}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <strong>
                <span>Before</span>
              </strong>
              <strong>
                <span>(annual)</span>
              </strong>
            </div>
            <span>2,173,821</span>
            <span>200,742</span>
            <span>893,015</span>
            <span>869</span>
          </div>
          <div className={styles.energy_values}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <strong>
                <span>After</span>
              </strong>
              <strong>
                <span>(annual)</span>
              </strong>
            </div>
            <span>553,710</span>
            <span>47,612</span>
            <span>304,752</span>
            <span>215</span>
          </div>
          <div className={styles.energy_values}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <strong>
                <span>Savings</span>
              </strong>
              <strong>
                <span>(lifetime)</span>
              </strong>
            </div>
            <span>1,620,111</span>
            <span>153,130</span>
            <span>588,263</span>
            <span>654</span>
          </div>
        </div>
      </div>
      <div className={styles.product_costs}>
        <span>
          <strong>Installation cost</strong>
        </span>
        <span>{initialCost}</span>
        <span>
          <strong>Net Present Value</strong>
        </span>
        <span>{totalAmount}</span>
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
