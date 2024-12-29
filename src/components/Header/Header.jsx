import "./Header.css";
import { Link } from "react-router-dom";
import ahaBanner from "../../assets/aha_banner-1.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__title-container">
        <Link to="/" className="header__title-link">
          <h1 className="header__title">AHA! Alliance for Humane Action</h1>
        </Link>
        <p className="header__subtitle">
          Low Cost Spay and Neuter Program and Resale Shop
        </p>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <Link to="/" className="header__nav-link">
            <li>About AHA!</li>
          </Link>
          <Link to="/spayneuter" className="header__nav-link">
            <li>Spay and Neuter Program</li>
          </Link>
          <Link to="/resale" className="header__nav-link">
            <li>AHA! Resale Shop</li>
          </Link>
          <Link to="/resources" className="header__nav-link">
            <li>Resources</li>
          </Link>
        </ul>
      </nav>
      <div className="header__banner-container">
        <img
          src={ahaBanner}
          alt="AHA! Alliance for Humane Action"
          className="header__banner"
        />
      </div>
    </header>
  );
}

export default Header;
