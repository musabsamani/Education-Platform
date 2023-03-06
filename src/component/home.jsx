import React, { Component } from "react";
import '../scss/home.scss'
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="_container">
          <div className="top">top</div>
          <div className="center">
            <Link to='/login'><button className="btn btn-primary">Login</button></Link>
            <button className="btn btn-primary">About Us</button>
          </div>
          <div className="bottom">
            <div className="leftInfo">
              <p>sign as volunteer</p>
              <p>Add student</p>
              <p>Our subjects</p>
              <p>Calendar</p>
            </div>
            <div className="rightInfo">
              <p>mrmo2010508@gmail.com</p>
              <p>for support:</p>
              <p>011 997 8588</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
