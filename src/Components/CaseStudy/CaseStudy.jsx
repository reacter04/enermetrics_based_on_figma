import React from "react";
import styles from "./CaseStudy.module.css";
import { motion } from "framer-motion";

function CaseStudy({ title, paragraph, image, animationParams }) {
  return (
    <div className={styles.case_study}>
      <h1>{title}</h1>
      <h2>{paragraph}</h2>
      <span>Learn more</span>
      <motion.img
        animate={{
          x: animationParams,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8,
          ease: "linear",
        }}
        src={image}
        alt={title}
      />
    </div>
  );
}

export default CaseStudy;
