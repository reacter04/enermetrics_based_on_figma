import React from "react";
import CalculationInfographic from "../../Components/CalculationInfographic/CalculationInfographic";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Main from "../../Components/Main/Main";
import CaseStudy from "../../Components/CaseStudy/CaseStudy";
import mountainImage from "../../Components/Assets/mountain.png";
import hotelImage from "../../Components/Assets/Hotel_travel_holiday_vector_vacation_symbol 2.png";

function HomePage() {

  return (
    <>
      <Main />
      <CalculationInfographic />
      <Testimonials />
      <CaseStudy
        title={"Case study: WINSPORT Canada Olympic Park"}
        paragraph={
          "Winsport is Canada’s premier Winter Sport facility. Maintaining optimal snow conditions requires power-hungry snow cannons. The cannons cause short-term demand peaks that broke assumptions of traditional energy modeling tools. By combining interval meter data with  hourly production forecasts, Enermetrics identified a surprising energy solution for their financial and environmental goals."
        }
        image={mountainImage}
        animationParams={[-200, 0]}
      />
      <CaseStudy
        title={"Case study: 2.000+ hotels across 50 States"}
        paragraph={
          "We examined the financial and environmental value of a range of technologies including solar PV, solar thermal, CHP, fuel cells, heat pumps and others. The bubble chart below compares various technologies at specific facilities to each other, to quickly rank thousands of options and figure out where the best investments are."
        }
        image={hotelImage}
        animationParams={[0, -200]}
      />
    </>
  );
}

export default HomePage;
