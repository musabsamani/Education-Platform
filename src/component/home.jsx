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
            <div className="leftInfo">left</div>
            <div className="rightInfo">right</div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
