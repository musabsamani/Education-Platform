import React, { Component } from "react";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import '../../scss/dashboard.scss';
import Chart from "../dashboardComponent/chart";
class VolunteerTable extends Component {
  render() {

    let volNo = 0
    this.props.volunteers.forEach(element => {
      volNo++;
    });
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
              <div className="propabilties">
                <div className="totalVolunteer">
                  <div>Total Volunteers</div>
                  <h1>{volNo}</h1>
                </div>

              </div>
              <div className="table_section">
                <div className="tablebar">
                  <input className="searchbar" type="search" placeholder="Search..." />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example">
                      <option value='none'>Sort By</option>
                      <option value="1">Name</option>
                      <option value="2">Date</option>
                      <option value="3">Approved</option>
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
                          <td>Databse is Empty</td>
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

