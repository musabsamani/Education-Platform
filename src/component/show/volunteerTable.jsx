import React, { Component } from "react";
import { Link } from "react-router-dom";
class VolunteerTable extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <Link to="/addvolunteer">
            <button className="btn btn-outline-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
              Add Volunteer
            </button>
          </Link>
          <table className="table caption-top mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Subject</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.volunteers.length > 0 ? (
                this.props.volunteers.map((volunteer, i) => (
                  <tr key={volunteer._id}>
                    <td>{i + 1}</td>
                    <td onClick={() => this.props.setTemporary(volunteer)}>
                      <Link to="/profile">{volunteer.name}</Link>
                    </td>
                    <td>{volunteer.age}</td>
                    <td>{volunteer.subject}</td>
                    <td>{volunteer.address}</td>
                    <td>{volunteer.phone}</td>
                    <td>{volunteer.email}</td>
                    <td>
                      <Link to={`/updateVolunteer?id=${volunteer._id}`}>
                        <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(volunteer)}>
                          Update
                        </button>
                      </Link>
                      <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(volunteer._id, "volunteers")}>
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

export default VolunteerTable;
