import React, { useState } from "react";
import "../styles/navbar.css"; // Make sure to create the Navbar.css file with the necessary styles.
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(""); // State to track the active item

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <div className="navbar__ul">
        <ul className="navbar__list">
        <NavLink to="/bulkadd">
          <li
            className={`navbar__item${activeItem === "add" ? " active" : ""}`}
            onClick={() => handleItemClick("add") }
          >
            <span className="navbar__icon">➕➕</span>BulkAdd
          </li>
          </NavLink>
          <NavLink to="/add">
          <li
            className={`navbar__item${activeItem === "add" ? " active" : ""}`}
            onClick={() => handleItemClick("add") }
          >
            <span className="navbar__icon">➕</span>Add
          </li>
          </NavLink>
          <NavLink to="/data">
          <li
            className={`navbar__item${activeItem === "data" ? " active" : ""}`}
            onClick={() => handleItemClick("data")}
          >
            <span className="navbar__icon">📊</span>Data
          </li>
          </NavLink>
          <NavLink to="/filter">
          <li
            className={`navbar__item${
              activeItem === "filter" ? " active" : ""
            }`}
            onClick={() => handleItemClick("filter")}
          >
            <span className="navbar__icon">🔍</span>Filter
          </li>
          </NavLink> 
          <NavLink to="/validate">
          <li
            className={`navbar__item${
              activeItem === "validate" ? " active" : ""
            }`}
            onClick={() => handleItemClick("validate")}
          >
            <span className="navbar__icon">✔️</span>Validate
          </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
