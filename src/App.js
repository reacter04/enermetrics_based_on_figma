import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import EnermetricsContextProvider from "./Context";

function App() {
  return (
    <EnermetricsContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </EnermetricsContextProvider>
  );
}

export default App;
