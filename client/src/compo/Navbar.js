import React, { useState } from "react";
import "../styles/navbar.css"; // Make sure to create the Navbar.css file with the necessary styles.
import { NavLink } from "react-router-dom";
import 'primeicons/primeicons.css';
// import React, { useState } from "react";
// import "../styles/navbar.css"; // Make sure to create the Navbar.css file with the necessary styles.
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(""); // State to track the active item

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <div className="navbar__ul">
        <ul className="navbar__list">
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <li
              className={`navbar__item${activeItem === "admin" ? " active" : ""}`}
              onClick={() => handleItemClick("admin")}
            >
              <span className="navbar__icon pi pi-shield"></span>Admin
            </li>
          </NavLink>
          <NavLink to="/bulkadd" style={{ textDecoration: "none" }}>
            <li
              className={`navbar__item${activeItem === "bulkadd" ? " active" : ""}`}
              onClick={() => handleItemClick("bulkadd")}
            >
              <span className="navbar__icon pi pi-plus"></span>BulkAdd
            </li>
          </NavLink>
          <NavLink to="/add" style={{ textDecoration: "none" }}>
            <li
              className={`navbar__item${activeItem === "add" ? " active" : ""}`}
              onClick={() => handleItemClick("add")}
            >
              <span className="navbar__icon pi pi-plus-circle"></span>Add
            </li>
          </NavLink>
          <NavLink to="/data" style={{ textDecoration: "none" }}>
            <li
              className={`navbar__item${activeItem === "data" ? " active" : ""}`}
              onClick={() => handleItemClick("data")}
            >
              <span className="navbar__icon pi pi-chart-bar"></span>Data
            </li>
          </NavLink>
          <NavLink to="/filter" style={{ textDecoration: "none" }}>
            <li
              className={`navbar__item${
                activeItem === "filter" ? " active" : ""
              }`}
              onClick={() => handleItemClick("filter")}
            >
              <span className="navbar__icon pi pi-search"></span>Filter
            </li>
          </NavLink> 
          <NavLink to="/validate" style={{ textDecoration: "none" }}>
            <li
              className={`navbar__item${
                activeItem === "validate" ? " active" : ""
              }`}
              onClick={() => handleItemClick("validate")}
            >
              <span className="navbar__icon pi pi-check"></span>Validate
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
