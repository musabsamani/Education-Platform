import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/volunteerTable">
                Volunteer Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/studentTable">
                Student Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/subjectTable">
                Subject Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lessonTable">
                Lesson Table
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
