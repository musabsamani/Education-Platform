import React, { Component } from "react";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import PopupComponent from "../dashboardComponent/popupComponent";
// import '../../scss/dashboard.scss';
import '../../scss/sessionTable.scss';
import Chart from "../dashboardComponent/chart";
import { handleOrder, handleOrderChange, handleAscendantly, handleSearch } from "../../helpers/helpersFunctions"
class SessionTable extends Component {
  state = {
    sessions: [],
  }
  constructor(props) {
    super(props)
    this.handleSearch = handleSearch.bind(this)
    this.handleOrder = handleOrder.bind(this)
    this.handleOrderChange = handleOrderChange.bind(this)
    this.handleAscendantly = handleAscendantly.bind(this)
  }
  componentDidMount() {
    this.setState({ sessions: this.props.sessions });
  }
  componentDidUpdate(prevProps) {
    if (this.props.sessions !== prevProps.sessions) {
      this.setState({ sessions: this.props.sessions });
    }
  }
  render() {
    return (
      <>
        < div className='main' >
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className='content_area'>
              <div className="_topContent">
                <h1>Sessions</h1>
                <Link to="/addSession">
                  <button className="btn btn-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
                    Add Session
                  </button>
                </Link>
              </div>
              <div className="tablebar">
                <input className="searchbar" type="search" placeholder="Search..." onChange={e => this.handleSearch(e, "sessions")} />
                <div className="dropdownSelect">
                  <select className="form-select" aria-label="Default select example" onChange={e => this.handleOrderChange(e, "sessions")}>
                    <option label="Sort By" value="" />
                    <option label="Name" value="name" />
                    <option label="lesson" value="lesson.name" />
                    <option label="subject" value="lesson.subject.code" />
                    <option label="room" value="room.name" />
                    <option label="volunteer" value="volunteer.name" />
                    <option label="start date" value="start" />
                    <option label="end date" value="end" />
                    {/* <option label="Approved" value="approved" /> */}
                  </select>
                  <select onChange={e => this.handleAscendantly(e, "sessions")} >
                    <option label="ascendantly" value="ascendantly" />
                    <option label="descendantly" value="descendantly" />
                  </select>
                </div>
              </div>
              <div className="propabilties">
                {/* for propabilties ##################
                ###########################
                 */}
                {/*  Start */}
                {this.state.sessions.length > 0 ? (
                  this.state.sessions.map((session, i) => (
                    <div key={session._id} className="card rounded overflow-hidden shadow">
                      <div className="row g-0">
                        {/* <!-- Image --> */}
                        <div className="col">
                          <img className="session_image" src="src/assets/71 brilliant Photoshop tutorials to boost your skills.jpg" alt="card image" />
                        </div>
                        {/* <!-- Card body --> */}
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <!-- Title --> */}
                            <div className="d-flex justify-content-between mb-2 mb-sm-3">
                              <h5 className="card-title mb-0"><a>{session && session.name}</a></h5>
                              <h5 className="card-title mb-0"><a>{session.lesson && session.lesson.name}</a></h5>
                              {/* <!-- Wishlist icon --> */}
                              <a href="#"><i className="far fa-heart text-dark"></i></a>
                              <div>
                                <Link to={`/updateSession?id=${session._id}`}>
                                  <button className="btn btn-info btn-sm m-1" onClick={() => this.props.setTemporary(session)}>
                                    Update
                                  </button>
                                </Link>
                                {/* <button className="btn btn-info btn-sm m-1">
                                  Update
                                </button> */}
                                <button className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(session._id, "sessions")}>
                                  Delete
                                </button>
                                {/* <button className="btn btn-danger btn-sm m-1">
                                  Delete
                                </button> */}
                              </div>
                            </div>
                            {/* <!-- Content --> */}
                            {/* <!-- Info --> */}
                            <ul className="list-inline mb-2">
                              <i className="fas fa-signal text-success me-2" >{i + 1}</i>
                              <i className="far fa-clock text-danger me-2">{session.lesson && session.lesson.subject && session.lesson.subject.code}</i>
                              <i className="fas fa-table text-orange me-2">{session.room && session.room.name}</i>
                            </ul>
                            {/* <!-- Rating --> */}
                            <ul className="list-inline mt-2">
                              <li className="item me-0 small mb-1"><i className="fas fa-star text-info">Volunteer :</i> {session.volunteer && session.volunteer.name}</li>
                              <li className="item me-0 small mb-1"><i className="fas fa-star text-warning">Start Date</i> {`${session.start.split("T")[0]}  ${session.start.split("T")[1]}`}</li>
                              <li className="item me-0 small mb-1"><i className="fas fa-star text-warning">End Date</i> {`${session.end.split("T")[0]}  ${session.end.split("T")[1]}`}</li>
                              <li className="list-inline-item ms-2 text-dark">{session.lesson && <PopupComponent lesson={session.lesson} />}</li>
                              <li className="list-inline-item me-0 small">

                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    Databse is Empty
                  </div>
                )
                }
                {/*  End */}
              </div>
              {/* Table style */}
              {/* End Table style */}
            </div>
          </div>
        </div >
      </>
    );
  }
}
export default SessionTable;
{/*
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
*/}

//! {/* <button className="btn btn-outline-primary mt-3">more details</button> */}