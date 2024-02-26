import React from "react";
import styles from "./Header.module.css";
import logo from "../Assets/Color-logo-with-background.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" />
        <span className={styles.logo_title}>enermetrics</span>
      </div></Link>
      <span className={styles.account}>My account</span>
    </div>
  );
}

export default Header;
