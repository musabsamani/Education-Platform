import React, { Component } from "react";
import { Link } from "react-router-dom";
class Lessontaable extends Component {
  state = {
    person: {},
  };
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <Link to="/addlesson">
            <button className="btn btn-outline-primary m-3 " onClick={() => this.props.setEmptyPerson()}>
              Add Lesson
            </button>
          </Link>
          <table className="table caption-top mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Subject</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.Table.map((table, i) => (
                <tr key={table._id}>
                  <td>{i + 1}</td>
                  <td>{table.volunteer}</td>
                  <td>{table.subject}</td>
                  <td>{table.date}</td>
                  <td>
                    <Link to={`/editUser?id=${table._id}`} onClick={() => this.props.onUpdate(table)}>
                      <button className="btn btn-info btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(table._id, "table")}>
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

export default Lessontaable;
