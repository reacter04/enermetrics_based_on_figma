import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <hr />
      <div>
        <span>&#169; Enemetrics {new Date().getFullYear()}</span>
        <span>Contact our team</span>
      </div>
    </footer>
  );
}

export default Footer;
