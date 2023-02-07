import React, { Component } from "react";
import { Link } from "react-router-dom";
import Show from "./show";

class VolunteerTable extends Component {
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.volunteers.map((volunteer, i) => (
                <tr key={volunteer._id}>
                  <td>{i + 1}</td>
                  <Link to="/show"><td onClick={()=>Show(volunteer)}>{volunteer.name}</td></Link>
                  <td>
                    <Link to={`/editUser?id=${volunteer._id}`} onClick={() => this.props.onUpdate(volunteer)}>
                      <button className="btn btn-info btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(volunteer._id)}>
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
