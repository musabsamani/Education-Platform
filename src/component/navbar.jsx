import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/navbar.scss";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="cont container-fluid">
        <div className="sample">
          <AutoStoriesIcon/><h5> Unlimited Learning </h5>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/addVolunteer">
               Sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/subjectTable">
                subjects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                About us!
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
