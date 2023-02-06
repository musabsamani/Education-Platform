import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudentTable extends Component {
  state = {
    person: {},
  };
  render() {
    return (
      <>
        <div className="container mt-5 ">
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
              {this.props.students.map((student, i) => (
                <tr key={student._id}>
                  <td>{i + 1}</td>
                  <td onClick={()=>Show(student)}>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.address}</td>
                  <td>{student.phone}</td>
                  <td>
                    <Link to={`/editStudent?id=${student._id}`} onClick={() => this.props.onUpdate(student)}>
                      <button className="btn btn-info btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(student._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default StudentTable;
