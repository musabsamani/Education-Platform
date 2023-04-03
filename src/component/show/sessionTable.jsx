import React, { Component } from "react";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import PopupComponent from "../dashboardComponent/popupComponent"
import '../../scss/dashboard.scss';
import Chart from "../dashboardComponent/chart";
class SessionTable extends Component {
  render() {
    return (
      <>
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <hr />
            <div className="center">
              <div className="tb container ">
                <Link to="/addSession">
                  <button className="btn btn-outline-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
                    Add Session
                  </button>
                </Link>
                <table className="table caption-top mt-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">subject</th>
                      <th scope="col">lesson</th>
                      <th scope="col">lesson Content</th>
                      <th scope="col">room</th>
                      <th scope="col">volunteer</th>
                      <th scope="col">start</th>
                      <th scope="col">end</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.sessions.length > 0 ? (
                      this.props.sessions.map((session, i) => (
                        <tr key={session._id}>
                          <td>{i + 1}</td>
                          <td>{session.lesson && session.lesson.subject && session.lesson.subject.code}</td>
                          <td>{session.lesson && session.lesson.name}</td>
                          <td>{session.lesson && <PopupComponent lesson={session.lesson} />}</td>
                          <td>{session.room && session.room.name}</td>
                          <td>{session.volunteer && session.volunteer.name}</td>
                          <td>{session.start}</td>
                          <td>{session.end}</td>
                          <td>
                            <Link to={`/updateSession?id=${session._id}`}>
                              <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(session)}>
                                Update
                              </button>
                            </Link>
                            <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(session._id, "sessions")}>
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
                <div className="bottom">

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SessionTable;
