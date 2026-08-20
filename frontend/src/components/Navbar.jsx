import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-mark">+</span>
          <div>
            <strong>MedCare Plus</strong>
            <small>Hospital Appointment System</small>
          </div>
        </div>
        <nav className="navbar-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/doctors" className="nav-link">
            Doctors
          </NavLink>
          <NavLink to="/booking" className="nav-link">
            Book Appointment
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
