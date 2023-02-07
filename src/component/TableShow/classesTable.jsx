import React, { Component } from "react";
import { Link } from "react-router-dom";
import Show from "./show";

class Classes extends Component {
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
                <th scope="col">Subject</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.Table.map((table, i) => (
                <tr key={table._id}>
                  <td>{i + 1}</td>
                  <Link to="/show"><td onClick={()=>this.props.setPerson(table)}>{table.volunteer}</td></Link>
                  <td>{table.subject}</td>
                  <td>{table.date}</td>
                  <td>
                    <Link to={`/editUser?id=${table._id}`} onClick={() => this.props.onUpdate(table)}>
                      <button className="btn btn-info btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(table._id)}>
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

export default Classes;
