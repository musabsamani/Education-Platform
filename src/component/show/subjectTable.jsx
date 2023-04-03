import React, { Component } from "react";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import '../../scss/subjectTable.scss'
import PopupSubject from "../dashboardComponent/popupComponent";
class SubjectTable extends Component {
  render() {
    return (
      <>
        < div className='main' >
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className='content_area'>
              <div className="_topContent">
                <h1>Subjects</h1>
                <Link to="/addSubject">
                  <button className="btn btn-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                    Add Subject
                  </button>
                </Link>
              </div>
              <div className="propabilties">
                {/* for propabilties ##################
                ###########################
                 */}
              </div>
              <div className="table_section">
                <div className="tablebar">
                  <input className="searchbar" type="search" placeholder="Search..." />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Sort By</option>
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
                        <th scope="col">Subject Code</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.subjects.length > 0 ? (
                        this.props.subjects.map((subject, i) => (
                          <tr key={subject._id}>
                            <td>{i + 1}</td>
                            <td className="Sname" >{subject.code}</td>
                            <td>{subject.name}</td>
                            <td>{subject.description}</td>
                            <td>
                              <Link to={`/updateSubject?id=${subject._id}`}>
                                <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(subject)}>
                                  Update
                                </button>
                              </Link>

                              <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(subject._id, "subjects")}>
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
        </div >
      </>
    );
  }
}

export default SubjectTable;
{/* <PopupSubject subject={subject} /> */ }
