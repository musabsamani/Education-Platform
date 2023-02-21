import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        {/* //! which language is better arabic or english we must use one of them for consistency */}
        <div className="b text-center align-items-center ">
          {/* <h1 className="m-5">أطلب العلم من المهد إلى اللحد</h1> */}
          <h1 className="m-5">Unlimited Education</h1>
          <div>
            <Link to="/addVolunteer">
              {/* <button className="btn btn-outline-secondary m-3">المتطوعون</button> */}
              <button className="btn btn-outline-secondary m-3" onClick={() => this.props.setTemporaryEmpty()}>
                Add Volunteers
              </button>
            </Link>
            <Link to="/addStudent">
              {/* <button className="btn btn-outline-secondary m-3 ">الطلاب</button> */}
              <button className="btn btn-outline-secondary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                Add Student
              </button>
            </Link>
            <Link to="/addSubject">
              {/* <button className="btn btn-outline-secondary m-3 ">المواد</button> */}
              <button className="btn btn-outline-secondary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                Add Subject
              </button>
            </Link>
            <Link to="/addLesson">
              {/* <button className="btn btn-outline-success m-3 ">الجدول الدراسي</button> */}
              <button className="btn btn-outline-success m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                add Lesson
              </button>
            </Link>
            <Link to="/calendar">
              {/* <button className="btn btn-outline-success m-3 ">الجدول الدراسي</button> */}
              <button className="btn btn-outline-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                Calendar
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
