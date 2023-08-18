import React, { useState } from "react";
import "../styles/navbar.css"; 
import { NavLink } from "react-router-dom";
import 'primeicons/primeicons.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("admin"); 

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
          <NavLink to="/check" style={{ textDecoration: "none" }}>
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
        <div className="navbar__beta">Beta</div>
      </div>
    </nav>
  );
};

export default Navbar;
