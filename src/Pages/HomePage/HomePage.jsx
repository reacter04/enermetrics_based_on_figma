import React from "react";
import styles from "../HomePage/HomePage.module.css";
import SimulateSection from "../../Components/SimulateSection/SimulateSection";
import SchemaLogo from "../../Components/Assets/tout-savoir-sur-le-microgrid.png";
import buildLogo from "../../Components/Assets/Screenshot 2022-11-03 at 16.17 2.png";
import panelLogo from "../../Components/Assets/Screenshot 2022-11-04 at 00.48 2.png";
import filterLogo from "../../Components/Assets/Screenshot 2022-11-08 at 17.05 2.png";
import CalculationInfographic from "../../Components/CalculationInfographic/CalculationInfographic";
import Testimonials from "../../Components/Testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <SimulateSection />
      <main className={styles.home_page_all_info}>
        <section className={styles.first_section}>
          <div className={styles.first_section_text_container}>
            <h1>Find the optimal energy solutions for your facility.</h1>
            <h2>
              Simulate installing solar panels, heat pumps, batteries, and more.
              Forecast energy use, utility bill, and CO2 savings.
            </h2>
            <span>Learn more</span>
          </div>
          <div className={styles.schema_logo_conainter}>
            <img src={SchemaLogo} alt="schema-logo" />
          </div>
        </section>
        <section className={styles.second_section}>
          <div className={styles.second_section_text_container}>
            <h1>Compare hundreds of energy solutions at once.</h1>
            <h2>
              Behind the simple interface is a powerful simulator that crunches
              big data in the background. Enermetris outperforms expensive
              analytics offered by the world’s leading consultancies.
            </h2>
          </div>
          <div className={styles.benefit_container}>
            <div className={styles.logo_benefit_continer}>
              <img src={buildLogo} alt="build" />
            </div>
            <div className={styles.benefit_text_container}>
              <h2>Build a digital facility model in minutes</h2>
              <p>
                All you need to get started is basic facility info and your
                normal energy bill. This is mixed with 3,344 building models to
                create a custom energy model for your facility.{" "}
              </p>
            </div>
          </div>
          <div className={styles.benefit_container}>
            <div className={styles.logo_benefit_continer}>
              <img src={panelLogo} alt="panel" />
            </div>
            <div className={styles.benefit_text_container}>
              <h2>
                Simulate installing solar panels, heat pumps, batteries, and
                more.{" "}
              </h2>
              <p>
                Choose a specific energy solution, or simulate hundreds at once.
                Enermetrics calculates the metrics you need for each option to
                make the right decisions.
              </p>
            </div>
          </div>
          <div className={styles.benefit_container}>
            <div className={styles.logo_benefit_continer}>
              <img src={filterLogo} alt="filter" />
            </div>
            <div className={styles.benefit_text_container}>
              <h2>Filter and rank for your budget and goals</h2>
              <p>
                Quickly identify the best energy solutions for your energy,
                financial, and environmental goals. Now you can find energy
                solutions as easy as flights or hotels.
              </p>
            </div>
          </div>
        </section>
      </main>
      <CalculationInfographic />
      <Testimonials/>
    </>
  );
}

export default HomePage;
