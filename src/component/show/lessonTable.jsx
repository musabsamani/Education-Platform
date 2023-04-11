import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
import PopupComponent from "../dashboardComponent/popupComponent";
import "../../scss/lessonTable.scss"
import Select from "../include/_select";
import { handleOrder, handleOrderChange, handleAscending, handleSearch } from "../../helpers/helpersFunctions"
class LessonTable extends Component {
  state = {
    lessons: [],
  }
  constructor(props) {
    super(props)
    this.handleSearch = handleSearch.bind(this)
    this.handleOrder = handleOrder.bind(this)
    this.handleOrderChange = handleOrderChange.bind(this)
    this.handleAscending = handleAscending.bind(this)
  }
  componentDidMount() {
    this.setState({ lessons: this.props.lessons });
  }
  componentDidUpdate(prevProps) {
    if (this.props.lessons !== prevProps.lessons) {
      this.setState({ lessons: this.props.lessons });
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
                <h1>Lessons</h1>
                <Link to="/addLesson">
                  <button className="btn btn-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                    Add Lesson
                  </button>
                </Link>
              </div>
              <div className="table_section">
                <div className="tablebar">
                  <input className="searchbar" type="search" placeholder="Search..." onChange={e => this.handleSearch(e, "lessons", ["name", "subject.code", "content"])} />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example" onChange={e => this.handleOrderChange(e, "lessons")}>
                      <option label="Sort By" value="" />
                      <option label="name" value="name" />
                      <option label="subject" value="subject.code" />
                      <option label="content" value="content" />
                    </select>
                    <select className="form-select" onChange={e => this.handleAscending(e, "lessons")} >
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
                        <th scope="col">Subject</th>
                        <th scope="col">Name</th>
                        <th scope="col">Content</th>
                        <th scope="col"></th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.lessons.length > 0 ? (
                        this.state.lessons.map((lesson, i) => (
                          <tr key={lesson._id}>
                            <td>{i + 1}</td>
                            <td>{lesson.subject && lesson.subject.code}</td>
                            <td>{lesson.name}</td>
                            <td>{lesson.content}</td>
                            {/* 
                            {console.log(lesson.file)}
                            {(lesson.file && lesson.file.includes("pdf")) ? console.log("pdf") : ""}
                            {(lesson.file && lesson.file.includes("mp4")) ? console.log("mp4") : ""} */}
                            <td>{lesson && <PopupComponent lesson={lesson} />}</td>
                            <td>
                              <Link to={`/updateLesson?id=${lesson._id}`}>
                                <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(lesson)}>
                                  Update
                                </button>
                              </Link>

                              <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(lesson._id, "lessons")}>
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

export default LessonTable;
