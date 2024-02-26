import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import EnermetricsContextProvider from "./Context";
import SimulationResults from "./Pages/SimulationResults/SimulationResults";
import SimulateSection from "./Components/SimulateSection/SimulateSection";

function App() {
  return (
    <EnermetricsContextProvider>
      <BrowserRouter>
        <Header />
        <SimulateSection />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/simulation_results"
            element={<SimulationResults />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </EnermetricsContextProvider>
  );
}

export default App;
