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
              <img src="src/assets/img/teaching-skills.jpg" alt="" />
              {/* <img src="src/assets/img/Education-rafiki.png" alt="" /> */}
            </div>
          </div>
          <div className="center">
            <div className="word">
              <h2>Our Teachers</h2>
            </div>
            <div className="cards">
              <div className="cardInfo">
                <img src="src/assets/img/Baldski.png" alt="" />
                {/* <img src="https://static.wikia.nocookie.net/ksi/images/b/b8/Baldski.png/revision/latest?cb=20201223000429" alt="" /> */}
                <p>Mohammed Ismail</p>
                <p>Front-End Dev</p>
              </div>
              <div className="cardInfo">
                <img src="src/assets/img/Baldski.png" alt="" />
                <p>Musab Obada</p>
                <p>Back-End Dev</p>
              </div>
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
