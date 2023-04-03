import React, { Component } from "react";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
class RoomTable extends Component {
  render() {
    return (
      <>
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className="center">
              <div className="tb container mt-5 ">
                <Link to="/addRoom">
                  <button className="btn btn-outline-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                    Add Room
                  </button>
                </Link>
                <table className="table caption-top mt-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Room Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.rooms.length > 0 ? (
                      this.props.rooms.map((room, i) => (
                        <tr key={room._id}>
                          <td>{i + 1}</td>
                          <td>{room.name}</td>
                          <td>
                            <Link to={`/updateRoom?id=${room._id}`}>
                              <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(room)}>
                                Update
                              </button>
                            </Link>

                            <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(room._id, "rooms")}>
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
            </div>
            <div className="bottom">
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default RoomTable;