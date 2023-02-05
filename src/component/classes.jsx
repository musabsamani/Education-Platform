import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { getuser } from '../Server/mtserveces';

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
                <th scope="col">Specializaiton</th>
                <th scope="col">Subject</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((user, i) => (
                <tr key={user._id}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.specializaiton}</td>
                  <td>{user.subject}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={`/editUser?id=${user._id}`} onClick={() => this.props.onUpdate(user)}>
                      <button className="btn btn-info btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(user._id)}>
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
