import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="b text-center align-items-center ">
        <h1 className="m-5">أطلب العلم من المهد إلى اللحد</h1>
        <div>
          {/* //! which language is better arabic or english we must use one of them for consistency */}
          <Link to="/volunteerTable">
            <button className="btn btn-outline-secondary m-3">المتطوعون</button>
            {/* <button className="btn btn-outline-secondary m-3">Our Volunteers</button> */}
          </Link>
          <Link to="/studentTable">
            <button className="btn btn-outline-secondary m-3 ">الطلاب</button>
            {/* <button className="btn btn-outline-secondary m-3 ">Our Student</button> */}
          </Link>
          <Link to="/subjectTable">
            <button className="btn btn-outline-secondary m-3 ">المواد</button>
            {/* <button className="btn btn-outline-secondary m-3 ">Our Subject</button> */}
          </Link>
          <Link to="/classesTable">
            <button className="btn btn-outline-success m-3 ">الجدول الدراسي</button>
            {/* <button className="btn btn-outline-success m-3 ">Classes Table</button> */}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
