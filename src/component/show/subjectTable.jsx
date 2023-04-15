import React, { Component } from "react";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import '../../scss/subjectTable.scss'
import PopupSubject from "../dashboardComponent/popupComponent";
import { handleOrder, handleOrderChange, handleAscending, handleSearch } from "../../helpers/helpersFunctions"

class SubjectTable extends Component {
  state = {
    subjects: [],
  }
  constructor(props) {
    super(props)
    this.handleSearch = handleSearch.bind(this)
    this.handleOrder = handleOrder.bind(this)
    this.handleOrderChange = handleOrderChange.bind(this)
    this.handleAscending = handleAscending.bind(this)
  }
  componentDidMount() {
    this.setState({ subjects: this.props.subjects });
  }
  componentDidUpdate(prevProps) {
    if (this.props.subjects !== prevProps.subjects) {
      this.setState({ subjects: this.props.subjects });
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
                  <input className="searchbar" type="search" placeholder="Search..." onChange={e => this.handleSearch(e, "subjects", ["name", "code", "description"])} />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example" onChange={e => this.handleOrderChange(e, "subjects")}>
                      <option label="Sort By" value="" />
                      <option label="Code" value="code" />
                      <option label="Name" value="name" />
                      <option label="Description" value="description" />
                    </select>
                    <select className="form-select" onChange={e => this.handleAscending(e, "subjects")} >
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
                        <th scope="col">Subject Code</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.subjects.length > 0 ? (
                        this.state.subjects.map((subject, i) => (
                          <tr key={subject._id}>
                            <td>{i + 1}</td>
                            <td className="Sname" >{subject.code}</td>
                            <td>{subject.name}</td>
                            <td>{subject.description}</td>
                            <td>
                              <Link to={`/updateSubject`}>
                                <button className="btn btn-info btn-sm m-1" onClick={() => this.props.setTemporary(subject)}>
                                  Update
                                </button>
                              </Link>

                              <button className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(subject._id, "subjects")}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">Databse is Empty</td>
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
