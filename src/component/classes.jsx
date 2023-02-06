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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((user, i) => (
                <tr key={user._id}>
                  <td>{i + 1}</td>
                  <Link to="/show"><td onClick={()=>Show(user)}>{user.name}</td></Link>
                  <td>{user.subject}</td>
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
