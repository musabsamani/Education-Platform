import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";

import "../../scss/lessonTable.scss"
import Select from "../include/_select";
class LessonTable extends Component {
  state = {
    temporary: {},
  };


  render() {
    return (
      <>
        < div className='main' >
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className='content_area'>
              <div className="_topContent">
                <h1>Lessons</h1>
                <Link to="/addLesson">
                  <button className="btn btn-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                    Add Lesson
                  </button>
                </Link>
              </div>
              <div className="propabilties">
                <div className="totalLesson">Total Lessons</div>
                <div className="totalLesson">Activated Lessons</div>
                <div className="totalLesson">Pending Lessons</div>
              </div>
              <div className="table_section">
                <div className="tablebar">
                  <input className="searchbar" type="search" placeholder="Search..." />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Sort By</option>
                      <option value="1">Name</option>
                      <option value="2">Date</option>
                      <option value="3">Approved</option>
                    </select>
                  </div>
                </div>

                {/* ########### Table content section #############   */}

                <div className="tableContent">
                  <table className="table caption-top">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Name</th>
                        <th scope="col">Content</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.lessons.length > 0 ? (
                        this.props.lessons.map((lesson, i) => (
                          <tr key={lesson._id}>
                            <td>{i + 1}</td>
                            <td>{lesson.subject && lesson.subject.code}</td>
                            <td>{lesson.name}</td>
                            <td>{lesson.content}</td>
                            <td>
                              <Link to={`/updateLesson?id=${lesson._id}`}>
                                <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(lesson)}>
                                  Update
                                </button>
                              </Link>

                              <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(lesson._id, "lessons")}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>Databse is Empty</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div >
      </>
    );
  }
}

export default LessonTable;
