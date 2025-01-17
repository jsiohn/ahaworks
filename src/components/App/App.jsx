import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About/About";
import SpayNeuter from "../SpayNeuter/SpayNeuter";
import Resale from "../Resale/Resale";
import Resources from "../Resources/Resources";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/spayneuter" element={<SpayNeuter />} />
          <Route path="/resale" element={<Resale />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
