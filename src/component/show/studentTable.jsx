import React, { Component } from "react";
import { Link } from "react-router-dom";
import Adminbar from "../adminbar";
import Sidebar from "../sidebar";
import { handleOrder, handleOrderChange, handleAscendantly, handleSearch } from "../../helpers/helpersFunctions"
class StudentTable extends Component {
  state = {
    students: [],
  }
  constructor(props) {
    super(props)
    this.handleSearch = handleSearch.bind(this)
    this.handleOrder = handleOrder.bind(this)
    this.handleOrderChange = handleOrderChange.bind(this)
    this.handleAscendantly = handleAscendantly.bind(this)
  }
  componentDidMount() {
    this.setState({ students: this.props.students });
  }
  componentDidUpdate(prevProps) {
    if (this.props.students !== prevProps.students) {
      this.setState({ students: this.props.students });
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
                <h1>Students</h1>
                <Link to="/addStudent">
                  <button className="btn btn-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
                    Add Student
                  </button>
                </Link>
              </div>
              <div className="table_section">
                <div className="tablebar">
                  <input className="searchbar" type="search" placeholder="Search..." onChange={e => this.handleSearch(e, "students")} />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example" onChange={e => this.handleOrderChange(e, "students")}>
                      <option label="Sort By" value="" />
                      <option label="age" value="age" />
                      <option label="address" value="address" />
                      <option label="phone" value="phone" />
                      <option label="name" value="name" />
                    </select>
                    <select className="form-select" onChange={e => this.handleAscendantly(e, "students")} >
                      <option label="ascendantly" value="ascendantly" />
                      <option label="descendantly" value="descendantly" />
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
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.students.length > 0 ? (
                        this.state.students.map((student, i) => (
                          <tr key={student._id}>
                            <td>{i + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>{student.phone}</td>
                            <td>
                              <Link to={`/updateStudent?id=${student._id}`}>
                                <button className="btn btn-info btn-sm m-1" onClick={() => this.props.setTemporary(student)}>
                                  Update
                                </button>
                              </Link>

                              <button className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(student._id, "students")}>
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

export default StudentTable;
