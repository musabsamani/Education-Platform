import React, { Component } from "react";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import '../../scss/dashboard.scss';
import Chart from "../dashboardComponent/chart";
import { handleOrder, handleOrderChange, handleAscending, handleSearch } from "../../helpers/helpersFunctions"
class VolunteerTable extends Component {
  state = {
    volunteers: [],
  }
  constructor(props) {
    super(props)
    this.handleSearch = handleSearch.bind(this)
    this.handleOrder = handleOrder.bind(this)
    this.handleOrderChange = handleOrderChange.bind(this)
    this.handleAscending = handleAscending.bind(this)
  }
  componentDidMount() {
    this.setState({ volunteers: this.props.volunteers });
  }
  componentDidUpdate(prevProps) {
    if (this.props.volunteers !== prevProps.volunteers) {
      this.setState({ volunteers: this.props.volunteers });
    }
  }


  render() {

    return (
      <>
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className='content_area'>
              <div className="_topContent">
                <h1>Volunteers</h1>
                <Link to="/addVolunteer">
                  <button className="btn btn-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
                    Add Volunteer
                  </button>
                </Link>
              </div>
              <div className="table_section">
                <div className="tablebar">
                  <input className="searchbar" type="search" placeholder="Search..." onChange={e => this.handleSearch(e, "volunteers", ["name", "age", "subject.code", "address", "phone", "email"])} />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example" onChange={e => this.handleOrderChange(e, "volunteers")}>
                      <option label="Sort By" value="" />
                      <option label="name" value="name" />
                      <option label="age" value="age" />
                      <option label="subject" value="subject.code" />
                      <option label="address" value="address" />
                      <option label="phone" value="phone" />
                      <option label="email" value="email" />
                    </select>
                    <select className="form-select" onChange={e => this.handleAscending(e, "volunteers")} >
                      <option label="ascending" value="ascending" />
                      <option label="descending" value="descending" />
                    </select>
                  </div>
                </div>

                {/* ########### Table content section #############   */}

                <div className="tableContent">
                  <table className="table caption-top">
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
                      {this.state.volunteers.length > 0 ? (
                        this.state.volunteers.map((volunteer, i) => (
                          <tr key={volunteer._id}>
                            <td>{i + 1}</td>
                            <td onClick={() => this.props.setTemporary(volunteer)}>
                              <Link to="/profile">{volunteer.name}</Link>
                            </td>
                            <td>{volunteer.age}</td>
                            <td>{volunteer.subject && volunteer.subject.code}</td>
                            <td>{volunteer.address}</td>
                            <td>{volunteer.phone}</td>
                            <td>{volunteer.email}</td>
                            <td>
                              <Link to={`/updateVolunteer`}>
                                <button className="btn btn-info btn-sm m-1" onClick={() => this.props.setTemporary(volunteer)}>
                                  Update
                                </button>
                              </Link>
                              <button className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(volunteer._id, "volunteers")}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8">Databse is Empty</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VolunteerTable;

