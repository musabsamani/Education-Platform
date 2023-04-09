// ###################### Libraries ######################
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
// import "./App.css";


import PDFUploader from "./viewPdf";
// ====== helpers files/
import { studentAPI, volunteerAPI, lessonAPI, subjectAPI, roomAPI, sessionAPI } from "./helpers/apiEndpoints";
import { handleChange, setTemporary, setTemporaryEmpty, dateFormaterForInput } from "./helpers/helpersFunctions";
import { messageShow } from "./helpers/messages"
import { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement, updateState } from "./helpers/crudFunctions";
// ###################### React Components ######################
// ====== components/
import Home from "./component/home";
import Dashboard from "./component/dashboardComponent/dashboard";
import Login from "./component/login";
import Email from "./component/email";
// ====== components/Form/
import StudentForm from "./component/form/student";
import VolunteerForm from "./component/form/volunteer";
import SubjectForm from "./component/form/subject";
import LessonForm from "./component/form/lesson";
import RoomForm from "./component/form/room";
import SessionForm from "./component/form/session";
// ====== components/show/
import StudentTable from "./component/show/studentTable";
import VolunteerTable from "./component/show/volunteerTable";
import LessonTable from "./component/show/lessonTable";
import SubjectTable from "./component/show/subjectTable";
import RoomTable from "./component/show/roomTable";
import SessionTable from "./component/show/sessionTable";
// ====== components/show/profile
import Profile from "./component/show/profile";
import Calendar from "./component/calendar";
import Session from "./component/dashboardComponent/session";
import { message } from "antd";
import ApexChart from "./component/dashboardComponent/apexchartv";
// import RegistrationForm from "./component/include/registerationTime";
// import comments from './helpers/comments';
// =============== this is for axios for POST and PUT methods
// ?? its so important
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = handleChange.bind(this);
    this.setTemporary = setTemporary.bind(this);
    this.setTemporaryEmpty = setTemporaryEmpty.bind(this);
    this.createElement = createElement.bind(this);
    this.updateElement = updateElement.bind(this);
    this.deleteElement = deleteElement.bind(this);
    this.multiPartCreateElement = multiPartCreateElement.bind(this);
    this.multiPartUpdateElement = multiPartUpdateElement.bind(this);
    this.updateState = updateState.bind(this);
    this.messageShow = messageShow.bind(this);
  }
  state = {
    students: [],
    volunteers: [],
    lessons: [],
    subjects: [],
    rooms: [],
    sessions: [],
    temporary: {},
    message: {}
  };
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
      const { data: rooms } = await axios.get(roomAPI);
      this.setState({ rooms });
      const { data: sessions } = await axios.get(sessionAPI);
      this.setState({ sessions });
    } catch (err) {
      console.log(err.message);
      console.log("Error fetching data from the server on componentDidMount");
      // this.setState({ message: err.message });
    }
  }
  componentDidUpdate() {
    if (Object.keys(this.state.message).length > 0) {
      let operation = this.state.message.operation
      let condition = operation === "delete" || operation === "create" || operation === "update"
      if (condition) {
        // his is for testing only 
        // console.log(this.state.message)
        // this.setState({ message: {} })
      } else {
        if (confirm(`${this.state.message.type}\n${this.state.message.content}`)) {
          this.setState({ message: {} })
        } else {
          this.setState({ message: {} })
        }
      }
    }
  }

  render() {
    return (
      // <RegistrationForm/>
      <>
        <main className="mainContainer">
          <Routes>
            <Route path="/">
              <Route index
                element={<Home />}
              />
              <Route path="login"
                element={<Login />}
              />
              <Route path="dashboard"
                element={<Dashboard
                  volunteers={this.state.volunteers}
                  students={this.state.students}
                  subjects={this.state.subjects}
                  sessions={this.state.sessions}
                />}
              />

            </Route>
            {/* ########### show ########### */}
            <>

              <Route path="/volunteerTable"
                element={<VolunteerTable
                  volunteers={this.state.volunteers}
                  temporary={this.state.temporary}
                  onDelete={this.deleteElement}
                  setTemporary={this.setTemporary}
                  setTemporaryEmpty={this.setTemporaryEmpty}
                />
                }
              />
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
              <Route path="viewPdf" element={<PDFUploader />} />
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
              /><Route
                path="/roomTable"
                element={
                  <RoomTable
                    rooms={this.state.rooms}
                    temporary={this.state.temporary}
                    onDelete={this.deleteElement}
                    setTemporary={this.setTemporary}
                    setTemporaryEmpty={this.setTemporaryEmpty}
                  />
                }
              /><Route
                path="/sessionTable"
                element={
                  <SessionTable
                    sessions={this.state.sessions}
                    temporary={this.state.temporary}
                    onDelete={this.deleteElement}
                    setTemporary={this.setTemporary}
                    setTemporaryEmpty={this.setTemporaryEmpty}
                  />
                }
              />
              {/* ########### profile ############*/}
              <Route path="/profile"
                element={<Profile
                  temporary={this.state.temporary}
                  setTemporary={this.setTemporary}
                />}
              />
            </>
            {/* ########### calendar ############*/}
            <>
              <Route path="/calendar"
                element={<Calendar
                  sessions={this.state.sessions}
                />}
              />
            </>
            {/* ########### Session ############*/}
            <>
              <Route path="/session" element={<Session
                volunteers={this.state.volunteers}
                lessons={this.state.lessons}

              />} />
            </>
            {/* ########### email ############*/}
            <>
              <Route path="/email"
                element={<Email
                  sendMail={this.sendMail}
                />}
              />
            </>
            {/* ########### add ########### */}
            <>
              <Route path="/addStudent"
                element={<StudentForm
                  name="add"
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  create={this.createElement}
                />}
              />
              <Route path="/addVolunteer"
                element={<VolunteerForm
                  name="add"
                  temporary={this.state.temporary}
                  subjects={this.state.subjects}
                  onChange={this.handleChange}
                  create={this.multiPartCreateElement}
                />}
              />
              <Route path="/addSubject"
                element={<SubjectForm
                  name="add"
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  create={this.createElement}
                />}
              />
              <Route
                path="/addLesson"
                element={<LessonForm
                  name="add"
                  subjects={this.state.subjects}
                  volunteers={this.state.volunteers}
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  create={this.multiPartCreateElement}
                />}
              />
              <Route
                path="/addRoom"
                element={<RoomForm
                  name="add"
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  create={this.createElement}
                />}
              />
              <Route
                path="/addSession"
                element={<SessionForm
                  name="add"
                  sessions={this.state.sessions}
                  subjects={this.state.subjects}
                  lessons={this.state.lessons}
                  rooms={this.state.rooms}
                  volunteers={this.state.volunteers}
                  temporary={this.state.temporary}
                  formater={dateFormaterForInput}
                  onChange={this.handleChange}
                  create={this.createElement}
                  setTemporary={this.setTemporary}
                  messageShow={this.messageShow}
                />}
              />
            </>
            {/* ########### update ########### */}
            <>
              <Route path="/updateStudent"
                element={<StudentForm
                  name="update"
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  update={this.updateElement}
                />}
              />
              <Route path="/updateVolunteer"
                element={<VolunteerForm
                  name="update"
                  temporary={this.state.temporary}
                  subjects={this.state.subjects}
                  onChange={this.handleChange}
                  update={this.multiPartUpdateElement}
                />}
              />
              <Route path="/updateSubject"
                element={<SubjectForm
                  name="update"
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  dateFormater={this.dateFormater}
                  update={this.updateElement}
                />}
              />
              <Route
                path="/updateLesson"
                element={<LessonForm
                  name="update"
                  subjects={this.state.subjects}
                  volunteers={this.state.volunteers}
                  updateState={this.updateState}
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  update={this.multiPartUpdateElement}
                />}
              />
              <Route
                path="/updateRoom"
                element={<RoomForm
                  name="update"
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  update={this.updateElement}
                />}
              />
              <Route
                path="/updateSession"
                element={<SessionForm
                  name="update"
                  sessions={this.state.sessions}
                  subjects={this.state.subjects}
                  rooms={this.state.rooms}
                  lessons={this.state.lessons}
                  volunteers={this.state.volunteers}
                  formater={dateFormaterForInput}
                  temporary={this.state.temporary}
                  onChange={this.handleChange}
                  update={this.updateElement}
                  setTemporary={this.setTemporary}
                  messageShow={this.messageShow}
                />}
              />
            </>
          </Routes>
        </main>
      </>
    );
  }
}
export default App;




// setTemporaryEmpty={this.setTemporaryEmpty}