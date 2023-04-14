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
                <h1><img src="" />Logo</h1>
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
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2" aria-selected="false" tabIndex="-1">Development</button>
            </li>
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3" aria-selected="false" tabIndex="-1">Graphic Design</button>
            </li>
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4" aria-selected="false" tabIndex="-1">Marketing</button>
            </li>
            {/* <!-- Tab item --> */}
            <li className="nav-item me-2 me-sm-5" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5" aria-selected="false" tabIndex="-1">Finance</button>
            </li>
          </ul>




          <footer className="pt-5">
            <div className="container">
              {/* <!-- Row START --> */}
              <div className="row g-4">

                {/* <!-- Widget 1 START --> */}
                <div className="col-lg-3">
                  {/* <!-- logo --> */}
                  <a className="me-0" href="index.html">
                    <img className="light-mode-item h-40px" src="assets/images/logo.svg" alt="logo" />
                    <img className="dark-mode-item h-40px" src="assets/images/logo-light.svg" alt="logo" />
                  </a>
                  <p className="my-3">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
                  {/* <!-- Social media icon --> */}
                  <ul className="list-inline mb-0 mt-3">
                    <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f"></i></a> </li>
                    <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-instagram" href="#"><i className="fab fa-fw fa-instagram"></i></a> </li>
                    <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-twitter" href="#"><i className="fab fa-fw fa-twitter"></i></a> </li>
                    <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a> </li>
                  </ul>
                </div>
                {/* <!-- Widget 1 END --> */}

                {/* <!-- Widget 2 START --> */}
                <div className="col-lg-6">
                  <div className="row g-4">
                    {/* <!-- Link block --> */}
                    <div className="col-6 col-md-4">
                      <h5 className="mb-2 mb-md-4">Company</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">News and Blogs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Library</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Career</a></li>
                      </ul>
                    </div>

                    {/* <!-- Link block --> */}
                    <div className="col-6 col-md-4">
                      <h5 className="mb-2 mb-md-4">Community</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#">Documentation</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Faq</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Forum</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Sitemap</a></li>
                      </ul>
                    </div>

                    {/* <!-- Link block --> */}
                    <div className="col-6 col-md-4">
                      <h5 className="mb-2 mb-md-4">Teaching</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#">Become a teacher</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">How to guide</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Terms &amp; Conditions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- Widget 2 END --> */}

                {/* <!-- Widget 3 START --> */}
                <div className="col-lg-3">
                  <h5 className="mb-2 mb-md-4">Contact</h5>
                  {/* <!-- Time --> */}
                  <p className="mb-2">
                    Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
                    <span className="d-block small">(9:AM to 8:PM IST)</span>
                  </p>

                  <p className="mb-0">Email:<span className="h6 fw-light ms-2">example@gmail.com</span></p>

                  <div className="row g-2 mt-2">
                    {/* <!-- Google play store button --> */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                      <a href="#"> <img src="assets/images/client/google-play.svg" alt="" /> </a>
                    </div>
                    {/* <!-- App store button --> */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                      <a href="#"> <img src="assets/images/client/app-store.svg" alt="app-store" /> </a>
                    </div>
                    {/* <!-- Row END --> */}
                  </div>
                </div>
                {/* <!-- Widget 3 END --> */}
                {/* <!-- Row END --> */}
              </div>

              {/* <!-- Divider --> */}
              <hr className="mt-4 mb-0" />

              {/* <!-- Bottom footer --> */}
              <div className="py-3">
                <div className="container px-0">
                  <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
                    {/* <!-- copyright text --> */}
                    <div className="text-primary-hover"> Copyrights <a href="https://www.webestica.com/" target="_blank" className="text-body">©2023 Webestica</a>. All rights reserved. </div>
                    {/* <!-- copyright links--> */}
                    <div className="justify-content-center mt-3 mt-lg-0">
                      <ul className="nav list-inline justify-content-center mb-0">
                        <li className="list-inline-item">
                          {/* <!-- Language selector --> */}
                          <div className="dropup mt-0 text-center text-sm-end">
                            <a className="dropdown-toggle nav-link" href="#" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fas fa-globe me-2"></i>Language
                            </a>
                            <ul className="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
                              <li><a className="dropdown-item me-4" href="#"><img className="fa-fw me-2" src="assets/images/flags/uk.svg" alt="" />English</a></li>
                              <li><a className="dropdown-item me-4" href="#"><img className="fa-fw me-2" src="assets/images/flags/gr.svg" alt="" />German </a></li>
                              <li><a className="dropdown-item me-4" href="#"><img className="fa-fw me-2" src="assets/images/flags/sp.svg" alt="" />French</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-inline-item"><a className="nav-link" href="#">Terms of use</a></li>
                        <li className="list-inline-item"><a className="nav-link pe-0" href="#">Privacy policy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
export default Home;

