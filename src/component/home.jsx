import React, { Component } from "react";
import '../scss/home.scss'
import { Link } from "react-router-dom";
import Navbar from "./navbar"

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="_conTainer">
          <div className="top">
            <div className="top_left">
              <div className="left_top">
                <h1>keep Learning...</h1>
              </div>
              <div className="left_bottom">
                <Link to='/login'><button className="_botton">Login</button></Link>
                <button className="_botton">About Us</button>
              </div>
            </div>
            <div className="top_right">
              <img src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-teaching-skills-1605625101.jpg" alt="" />
            </div>
            
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
