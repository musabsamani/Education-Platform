import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
class Lessontaable extends Component {
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
            <hr />
            <div className="center">
              <div className="tb container mt-5 ">
                <Link to="/addLesson">
                  <button className="btn btn-outline-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                    Add Lesson
                  </button>
                </Link>
                <table className="table caption-top mt-5">
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
        </div >

      </>
    );
  }
}

export default Lessontaable;
