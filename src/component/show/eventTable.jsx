import React, { Component } from "react";
import { Link } from "react-router-dom";
class EventTable extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <Link to="/addEvent">
            <button className="btn btn-outline-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
              Add Event
            </button>
          </Link>
          <table className="table caption-top mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">start</th>
                <th scope="col">end</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.events.length > 0 ? (
                this.props.events.map((event, i) => (
                  <tr key={event._id}>
                    <td>{i + 1}</td>
                    <td>{event.title}</td>
                    <td>{event.start}</td>
                    <td>{event.end}</td>
                    <td>
                      <Link to={`/updateEvent?id=${event._id}`}>
                        <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(event)}>
                          Update
                        </button>
                      </Link>

                      <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(event._id, "events")}>
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

export default EventTable;
