import React, { Component } from "react";
import { Link } from "react-router-dom";
import Adminbar from "../adminbar";
import Sidebar from "../sidebar";

class StudentTable extends Component {
  render() {
    return (
      <>
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className='content_area'>
              <div className="_topContent">
                <h1>Volunteers</h1>
                <Link to="/addStudent">
                  <button className="btn btn-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
                    Add Student
                  </button>
                </Link>
              </div>
              <div className="propabilties">
                <div className="totalLesson">Total Students</div>
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
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.students.length > 0 ? (
                        this.props.students.map((student, i) => (
                          <tr key={student._id}>
                            <td>{i + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>{student.phone}</td>
                            <td>
                              <Link to={`/updateStudent?id=${student._id}`}>
                                <button className="btn btn-info btn-sm m-1" onClick={() => this.props.setTemporary(student)}>
                                  Update
                                </button>
                              </Link>

                              <button className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(student._id, "students")}>
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
        </div>

      </>
    );
  }
}

export default StudentTable;
