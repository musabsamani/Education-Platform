// ###################### Libraries ######################
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TestDesign from "./testdesign";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import PDFUploader from "./viewPdf";
// import "./App.css";
// ====== helpers files/
import { bindMethods } from "./helpers/reactBasicFunc";
// ###################### React Components ######################
// ====== components/
import Home from "./component/home";
import Dashboard from "./component/dashboardComponent/dashboard";
import Login from "./component/login";
import Email from "./component/email";
import Demail from "./component/Demail";
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
// import comments from './helpers/comments';
// =============== this is for axios for POST and PUT methods
// ?? its so important
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

class App extends Component {
  constructor(props) {
    super(props);
    bindMethods(this)
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
  componentDidMount() {
    this.componentDidMount()
  }
  componentDidUpdate(prevProps, prevState) {
    this.componentDidUpdate(prevProps, prevState)
  }

  render() {
    return (
      // <RegistrationForm/>
      <>
        <main className="mainContainer">
          <ToastContainer />
          <Routes>
            <Route path="/">
              <Route index
                element={<Home />}
              />
              <Route path="login"
                element={<Login />}
              />
              {/* <Route path="testdesign"
                element={<TestDesign />}
              /> */}
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
                    sessionNotify={this.sessionNotify}
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
              <Route path="/Demail"
                element={<Demail
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
                  update={this.updateElement}
                />}
              />
              <Route
                path="/updateLesson"
                element={<LessonForm
                  name="update"
                  subjects={this.state.subjects}
                  volunteers={this.state.volunteers}
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