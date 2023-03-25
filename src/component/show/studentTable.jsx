import React, { Component } from "react";
import { Link } from "react-router-dom";
import Adminbar from "../adminbar";
import Sidebar from "../sidebar";

class StudentTable extends Component {
  render() {
    return (
      <>
        <div className='main'>
                <Sidebar/>
                <div className='content'>
                    <Adminbar/>
                    <hr />
                    <div className="center">
                    <div className="container mt-5 ">
          <Link to="/addStudent">
            <button className="btn btn-outline-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
              Add Student
            </button>
          </Link>
          <table className="table caption-top mt-5">
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
                        <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(student)}>
                          Update
                        </button>
                      </Link>

                      <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(student._id, "students")}>
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
                    <div className="bottom">
    
                    </div>  
                </div>
            </div>
        
      </>
    );
  }
}

export default StudentTable;
