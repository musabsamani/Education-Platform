import React, { Component } from "react";
import { Link } from "react-router-dom";
import Show from "./show";

class SubjectTable extends Component {
  
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <table className="table caption-top mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.subjects.map((subject, i) => (
                <tr key={subject._id}>
                  <td>{i + 1}</td>
                  <td onClick={()=>Show(subject)}>{subject.name}</td>
                  <td>
                    <Link to={`/editUser?id=${subject._id}`} onClick={() => this.props.onUpdate(subject)}>
                      <button className="btn btn-info btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(subject._id)}>
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

export default SubjectTable;
