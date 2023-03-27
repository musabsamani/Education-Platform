import React, { Component } from "react";
import { Link } from "react-router-dom";
class Lessontaable extends Component {
  state = {
    temporary: {},
  };
  render() {
    return (
      <>
        <div className="container mt-5 ">
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
                <th scope="col">content</th>
              </tr>
            </thead>
            <tbody>
              {this.props.lessons.length > 0 ? (
                this.props.lessons.map((lesson, i) => (
                  <tr key={lesson._id}>
                    <td>{i + 1}</td>
                    <td onClick={() => this.props.setTemporary(i)}>
                      {lesson.subjectCode}
                    </td>
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
      </>
    );
  }
}

export default Lessontaable;
