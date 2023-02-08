import React, { Component } from "react";
import { Link } from "react-router-dom";
class VolunteerTable extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <Link to="/addvolunteer">
            <button className="btn btn-outline-primary m-3">Add Volunteer</button>
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
              {this.props.volunteers.map((volunteer, i) => (
                <tr key={volunteer._id}>
                  <td>{i + 1}</td>
                  <td>
                    <Link to="/profile" onClick={() => this.props.setPerson(volunteer)}>
                      {volunteer.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/editUser?id=${volunteer._id}`} onClick={() => this.props.setPerson(volunteer)}>
                      <button className="btn btn-info btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(volunteer._id, "volunteers")}>
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

export default VolunteerTable;
