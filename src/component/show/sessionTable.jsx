import React, { Component } from "react";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import PopupComponent from "../dashboardComponent/popupComponent";
// import '../../scss/dashboard.scss';
import '../../scss/sessionTable.scss';
import Chart from "../dashboardComponent/chart";
import { handleOrder, handleOrderChange, handleAscending, handleSearch } from "../../helpers/helpersFunctions"
import Demail from "../Demail";
class SessionTable extends Component {
  state = {
    sessions: [],
  }
  handleNotify = e => {
    console.log(e);

  }



















  constructor(props) {
    super(props)
    this.handleSearch = handleSearch.bind(this)
    this.handleOrder = handleOrder.bind(this)
    this.handleOrderChange = handleOrderChange.bind(this)
    this.handleAscending = handleAscending.bind(this)
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
                <input className="searchbar" type="search" placeholder="Search..." onChange={e => this.handleSearch(e, "sessions", ["name", "lesson.name", "lesson.subject.code", "room.name", "volunteer.name", "start", "end"])} />
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
                  <select className="form-select" onChange={e => this.handleAscending(e, "sessions")} >
                    <option label="ascending" value="ascending" />
                    <option label="descending" value="descending" />
                  </select>
                </div>
              </div>
              <div className="propabilties">
                {/* for propabilties ##################
                ###########################
                 */}
                <div className="col-xxl-8">
                  <div className="card shadow p-2">
                    <div className="row g-0">
                      <div className="col-lg-5">
                        <img src="https://eduport.webestica.com/docs/assets/images/course/4by3/02.jpg" className="img-fluid rounded-2" alt="Card image" />
                      </div>
                      <div className="col-lg-7">
                        <div className="card-body">
                          {/* <!-- Badge and rating --> */}
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            {/* <!-- Badge --> */}
                            <a href="#" className="badge text-bg-primary mb-2 mb-sm-0">Marketing</a>
                            {/* <!-- Rating and wishlist --> */}
                            <div>
                              <span className="text-dark me-3"><i className="fas fa-star text-warning me-1"></i>4.5</span>
                              <a href="#" className="text-dark"><i className="far fa-heart"></i></a>
                            </div>
                          </div>

                          {/* <!-- Title --> */}
                          <h5 className="card-title"><a href="#">The Complete Digital Marketing Course - 12 Courses in 1</a></h5>
                          <p className="text-truncate">Explained propriety off out perpetual his you. Dependent contented he explained propriety off out perpetual his you. </p>

                          {/* <!-- Info --> */}
                          <ul className="list-inline">
                            <li className="list-inline-item text-dark mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2"></i>6h 56m</li>
                            <li className="list-inline-item text-dark mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2"></i>82 lectures</li>
                            <li className="list-inline-item text-dark"><i className="fas fa-signal text-success me-2"></i>Beginner</li>
                          </ul>

                          {/* <!-- Price and avatar --> */}
                          <div className="d-sm-flex justify-content-sm-between align-items-center">
                            {/* <!-- Avatar --> */}
                            <div className="d-flex align-items-center">
                              <div className="avatar">
                                {/* <img className="avatar-img rounded-circle" src="https://eduport.webestica.com/docs/assets/images/avatar/01.jpg" alt="avatar" /> */}
                              </div>
                              <p className="mb-0 ms-2"><a href="#" className="text-dark">Larry Lawson</a></p>
                            </div>
                            {/* <!-- Price --> */}
                            <div className="mt-3 mt-sm-0">
                              <a href="#" className="btn btn-dark">View more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Start */}
                {this.state.sessions.length > 0 ? (
                  this.state.sessions.map((session, i) => (
                    <div key={session._id} className="card rounded overflow-hidden shadow">
                      <div className="row g-0">
                        {/* <!-- Image --> */}
                        <div className="col">
                          <picture >
                            <img className="session_image" src="src/assets/img/71 brilliant Photoshop tutorials to boost your skills.jpg" alt="card image" />
                          </picture>
                        </div>
                        {/* <!-- Card body --> */}
                        <div className="info col-md-8">
                          <div className="card-body">
                            {/* <!-- Title --> */}
                            <div className="d-flex justify-content-between mb-2 mb-sm-3">
                              <h5 className="card-title fas fa-signal mb-0"> Session No : <a className="text-danger">{i + 1}</a></h5>
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
                              <i className="fas fa-signal me-2">Name Of Lesson : <span className="text-success">{session.lesson && session.lesson.name}</span></i>
                              <i className="far fa-clock me-2">Code : <span className="text-danger">{session.lesson && session.lesson.subject && session.lesson.subject.code}</span></i>

                            </ul>
                            {/* <!-- Rating --> */}
                            <ul className="list-inline mt-2" width="300px">
                              <li className="item me-0 small mb-1"><i className="fas fa-star text-info">Room :</i> {session.room && session.room.name}</li>
                              <li className="item me-0 small mb-1"><i className="fas fa-star text-info">Volunteer :</i> {session.volunteer && session.volunteer.name}</li>
                              <li className="item me-0 small mb-1"><i className="fas fa-star text-warning">Start Date</i> {`${session.start.split("T")[0]}  ${session.start.split("T")[1]}`}</li>
                              <li className="item me-0 small mb-1"><i className="fas fa-star text-warning">End Date</i> {`${session.end.split("T")[0]}  ${session.end.split("T")[1]}`}</li>
                              <li className="list-inline-item me-0 small"></li>
                            </ul>
                            <div className="contentShow">
                              {session.lesson && <PopupComponent lesson={session.lesson} />}
                            </div>
                            <div className="notify me-2">
                              <button type='button' className="btn btn-success" onClick={() => <Demail Dmsg={session} open={true} />}>Send Notify</button>
                            </div>
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