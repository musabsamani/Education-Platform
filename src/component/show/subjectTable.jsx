import React, { Component } from "react";
import { Link } from "react-router-dom";
class SubjectTable extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <Link to="/addsubject">
            <button className="btn btn-outline-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
              Add Subject
            </button>
          </Link>
          <table className="table caption-top mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.subjects.length > 0 ? (
                this.props.subjects.map((subject, i) => (
                  <tr key={subject._id}>
                    <td>{i + 1}</td>
                    <td>{subject.name}</td>
                    <td>
                      <Link to={`/updateSubject?id=${subject._id}`}>
                        <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(subject)}>
                          Update
                        </button>
                      </Link>

                      <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(subject._id, "subjects")}>
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

export default SubjectTable;
