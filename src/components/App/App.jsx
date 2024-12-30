import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About/About";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
