import React from "react";
import styles from "./Testimonials.module.css";
import sponsorsImage from "../Assets/sponsors.png";
import firstSponsorLogo from "../Assets/firstSponsorLogo.png";
import secondSponsorLogo from "../Assets/secondSponsorLogo.png";
import thirdSponsorLogo from "../Assets/thirdSponsorLogo.png";

function Testimonials() {
  return (
    <div className={styles.testimonials_container}>
      <div className={styles.testimonials_intro_container}>
        <h1>Powering on-site energy investments since 2015.</h1>
        <h2>
          The first lines of code for Enermetrics were written in 2015. Since
          then, our clients have included commercial & industrial facilities,
          campuses, energy consultancies, installers, and OEMs.
        </h2>
        <img src={sponsorsImage} alt="sponsors" />
        <div className={styles.reviews_container}>
          <div>
            <p>
              “Enermetrics pushes past the confines of the status quo to deliver
              incredibly unique solutions to bring energy efficiency and
              cost-savings to their clients.”{" "}
            </p>
            <img src={firstSponsorLogo} alt="firstSponsorLogo" />
          </div>
          <div>
            <p>
              “Enermetrics is great to work with. By taking the information from
              our energy audits, and contextualizing them to the clients
              specific needs, budget, and goals, they make energy efficiency
              simple.”
            </p>
            <img src={secondSponsorLogo} alt="secondSponsorLogo" />
          </div>
          <div>
            <p>
              “Enermetrics' technical costing and performance database software
              was a quick and efficient resource for our future planning and
              project feasibility evaluation of alternative energy technology
              options.”{" "}
            </p>
            <img src={thirdSponsorLogo} alt="thirdSponsorLogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
