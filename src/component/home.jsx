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
              <img src="src/assets/img/Education-rafiki.svg" alt="profile photo" />
            </div>
          </div>
          {/* <div className="center"> */}
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="mb-4">Testimonials</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                quisquam eum porro a pariatur veniam.
              </p>
            </div>
          </div>
          <ul className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1" aria-selected="true">Web Design</button>
            </li>
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2" aria-selected="false" tabindex="-1">Development</button>
            </li>
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3" aria-selected="false" tabindex="-1">Graphic Design</button>
            </li>
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4" aria-selected="false" tabindex="-1">Marketing</button>
            </li>
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5" aria-selected="false" tabindex="-1">Finance</button>
            </li>
          </ul>



          {/* </div> */}
          {/* <div className="bottom">
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
          </div> */}
        </div>
      </>
    );
  }
}
export default Home;

// <div className="cards">
//   <div className="cardInfo">
//     <img src="src/assets/img/Baldski.png" alt="" />
{/* <img src="https://static.wikia.nocookie.net/ksi/images/b/b8/Baldski.png/revision/latest?cb=20201223000429" alt="" /> */ }
{/* <p>Mohammed Ismail</p>
                <p>Front-End Dev</p>
              </div>
              <div className="cardInfo">
                <img src="src/assets/img/Baldski.png" alt="" />
                <p>Musab Obada</p>
                <p>Back-End Dev</p>
              </div>
            </div> */}