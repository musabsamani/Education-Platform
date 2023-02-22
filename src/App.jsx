// ###################### Libraries ######################
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "./App.css";

// ====== APIEndPoints/
import { studentAPI, volunteerAPI, lessonAPI, subjectAPI, baseAPI } from "./helpers/apiEndpoints";
// ###################### React Components ######################
// ====== components/
import Home from "./component/home";
import Navbar from "./component/navbar";
// ====== components/add/
import AddStudent from "./component/add/student";
import AddVolunteer from "./component/add/volunteer";
import AddSubject from "./component/add/subject";
import Addlesson from "./component/add/lesson";
// ====== components/add/
import UpdateStudent from "./component/update/student";
import UpdateVolunteer from "./component/update/volunteer";
import UpdateSubject from "./component/update/subject";
import Updatelesson from "./component/update/lesson";
// ====== components/show/
import StudentTable from "./component/show/studentTable";
import VolunteerTable from "./component/show/volunteerTable";
import LessonTable from "./component/show/lessonTable";
import SubjectTable from "./component/show/subjectTable";
// ====== components/show/profile
import Profile from "./component/show/profile";
import CAlendar from "./component/calendar";
// import comments from './helpers/comments';
// =============== this is for axios for POST and PUT methods
// ?? its so important
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

class App extends Component {
  state = {
    students: [],
    volunteers: [],
    lessons: [],
    subjects: [],
    temporary: {},
  };
  baseAPI;
  // this react function is fired up when page load initially
  async componentDidMount() {
    try {
      const { data: students } = await axios.get(studentAPI);
      this.setState({ students });
      const { data: volunteers } = await axios.get(volunteerAPI);
      this.setState({ volunteers });
      const { data: lessons } = await axios.get(lessonAPI);
      this.setState({ lessons });
      const { data: subjects } = await axios.get(subjectAPI);
      this.setState({ subjects });
    } catch {
      console.log("error fetching data from the server");
    }
  }
  // =======  CREAT  ========
  createElement = async (event, formId, resource) => {
    try {
      event.preventDefault();
      var unindexed_array = $(`#${formId}`).serializeArray();
      var data = {};
      unindexed_array.forEach((n, i) => {
        data[n["name"]] = n["value"];
      });
      const uri = `${baseAPI}/${resource}`;
      await axios.post(`${uri}`, data).then((res) => {
        data._id = `${Math.floor(Math.pow(10, 15) * Math.random())}`;
        const element = [...this.state[resource], data];
        this.setState({ [resource]: element });
        this.setTemporaryEmpty();
      });
    } catch {
      console.error(`Error Creating ${resource}`);
    }
  };
  // =======  UPDATE  ========
  updateElement = async (event, id, resource) => {
    try {
      event.preventDefault();
      var unindexed_array = $(`#${id}`).serializeArray();
      var data = {};
      unindexed_array.forEach((n, i) => {
        data[n["name"]] = n["value"];
      });
      const uri = `${baseAPI}/${resource}/${data._id}`
      await axios.put(`${uri}`, data).then(() => {
        const element = [...this.state[resource]]
        element.forEach((element) => { element._id === data._id ? Object.assign(element, data) : element })
        this.setState({ [resource]: element });
        this.setTemporaryEmpty()
      });
    } catch {
      console.error(`Error Updating ${resource}`);
    }
  };
  // =======  DELETE  ========
  deleteElement = async (id, resource) => {
    try {
      const uri = `${baseAPI}/${resource}`;
      await axios.delete(`${uri}/${id}`).then(() => {
        const data = this.state[resource].filter((element) => element._id !== id);
        this.setState({ [resource]: data });
      });
    } catch {
      console.error(`Error Deleting ${resource}`);
    }
  };

  // =======  setting this.state.temporary while typing in the input fields  ========
  handleChange = (e) => {
    const temporary = { ...this.state.temporary };
    temporary[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ temporary });
  };
  // =======  store value in this.state.temporary  ========
  setTemporary = (element) => {
    console.log(element)
    this.setState({ temporary: element });
  };
  // =======  setting this.state.temporary to empty value  ========
  setTemporaryEmpty = () => {
    this.setState({ temporary: {} });
  };
  render() {
    return (
      <>
        <Navbar />
        <main className="container-fluid">
          <Routes>
            <Route path="/"
              element={<Home
                setTemporaryEmpty={this.setTemporaryEmpty}
              />}
            />
            {/* ########### show ########### */}
            <>
            <Route
              path="/studentTable"
              element={
                <StudentTable
                  students={this.state.students}
                  temporary={this.state.temporary}
                  onDelete={this.deleteElement}
                  setTemporary={this.setTemporary}
                  setTemporaryEmpty={this.setTemporaryEmpty}
                />
              }
            />
            <Route
              path="/subjectTable"
              element={
                <SubjectTable
                subjects={this.state.subjects}
                temporary={this.state.temporary}
                onDelete={this.deleteElement}
                setTemporary={this.setTemporary}
                setTemporaryEmpty={this.setTemporaryEmpty}
                />
              }
            />
              <Route
                path="/volunteerTable"
                element={
                  <VolunteerTable
                    volunteers={this.state.volunteers}
                    temporary={this.state.temporary}
                    onDelete={this.deleteElement}
                    setTemporary={this.setTemporary}
                    setTemporaryEmpty={this.setTemporaryEmpty}
                  />
                }
              />
            <Route
              path="/lessonTable"
              element={
                <LessonTable
                  lessons={this.state.lessons}
                  temporary={this.state.temporary}
                  onDelete={this.deleteElement}
                  setTemporary={this.setTemporary}
                  setTemporaryEmpty={this.setTemporaryEmpty}
                />
              }
            />
            <Route path="/profile"
              element={<Profile
                temporary={this.state.temporary}
                setTemporary={this.setTemporary}
              />}
            />
            </>
            {/* ########### add ########### */}
            <>
            <Route path="/addStudent"
              element={<AddStudent
                temporary={this.state.temporary}
                onChange={this.handleChange}
                create={this.createElement}
              />}
            />
            <Route path="/addVolunteer"
              element={<AddVolunteer
                temporary={this.state.temporary}
                subjects={this.state.subjects}
                onChange={this.handleChange}
                create={this.createElement}
              />}
            />
            <Route path="/addSubject"
              element={<AddSubject
                subject={this.state.temporary}
                onChange={this.handleChange}
                create={this.createElement}
              />}
            />
            <Route
              path="/addLesson"
              element={<Addlesson
                subjects={this.state.subjects}
                volunteers={this.state.volunteers}
                temporary={this.state.temporary}
                onChange={this.handleChange}
                create={this.createElement}
              />}
              />
            </>
            {/* ########### update ########### */}
            <>
            <Route path="/updateStudent"
              element={<UpdateStudent
                temporary={this.state.temporary}
                onChange={this.handleChange}
                update={this.updateElement}
              />}
            />
            <Route path="/updateVolunteer"
              element={<UpdateVolunteer
                temporary={this.state.temporary}
                subjects={this.state.subjects}
                onChange={this.handleChange}
                update={this.updateElement}
              />}
            />
            <Route path="/updateSubject"
              element={<UpdateSubject
                subject={this.state.temporary}
                onChange={this.handleChange}
                update={this.updateElement}
              />}
            />
            <Route
              path="/updateLesson"
              element={<Updatelesson
                subjects={this.state.subjects}
                volunteers={this.state.volunteers}
                temporary={this.state.temporary}
                onChange={this.handleChange}
                update={this.updateElement}
              />}
              />
            </>
            {/* ########### calendar ############*/}
            <>
              <Route path="/calendar"
                element={<CAlendar/>}
                />
            </>
          </Routes>
        </main>
      </>
    );
  }
}
export default App;
