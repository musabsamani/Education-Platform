import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="b d-flex-column text-center align-items-center ">
        {/* <img /> */}
        <h1 className="m-5">أطلب العلم من المهد إلى اللحد</h1>
        <Link to="/addvolunteer">
          <button className="btn btn-outline-primary m-3">Add Volunteer</button>
        </Link>
        <Link to="/addstudent">
          <button className="btn btn-outline-primary m-3">Add Student</button>
        </Link>
        <Link to="/studentTable">
          <button className="btn btn-outline-info m-3 ">Our Student</button>
        </Link>
        <Link to="/classes">
          <button className="btn btn-outline-success m-3 ">Classes Table</button>
        </Link>
        <Link to="/addsubject">
          <button className="btn btn-outline-success m-3 ">Add Subject</button>
        </Link>
        <Link to="/oursubject">
          <button className="btn btn-outline-info m-3 ">Our Subject</button>
        </Link>
        {/* <Link to='/Calendar'><button className="btn btn-outline-info m-3">Calendar</button></Link> */}
      </div>
    </>
  );
};
export default Home;
