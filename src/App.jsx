// ###################### Libraries ######################
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./scss/App.scss";

// ====== helpers files/
import { studentAPI, volunteerAPI, lessonAPI, subjectAPI, eventAPI } from "./helpers/apiEndpoints";
import { handleChange, setTemporary, setTemporaryEmpty, dateFormaterForInput } from "./helpers/helpersFunctions";
import { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement } from "./helpers/crudFunctions";
// ###################### React Components ######################
// ====== components/
import Home from "./component/home";
import Dashboard from "./component/dashboard";
import Chart from "./component/chart";
import Login from "./component/login";
// ====== components/Form/
import StudentForm from "./component/form/student";
import VolunteerForm from "./component/form/volunteer";
import SubjectForm from "./component/form/subject";
import EventForm from "./component/form/event";
import LessonForm from "./component/form/lesson";
// ====== components/show/
import StudentTable from "./component/show/studentTable";
import VolunteerTable from "./component/show/volunteerTable";
import LessonTable from "./component/show/lessonTable";
import SubjectTable from "./component/show/subjectTable";
import EventTable from "./component/show/eventTable";
// ====== components/show/profile
import Profile from "./component/show/profile";
import Calendar from "./component/calendar";
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
  }
  state = {
    students: [],
    volunteers: [],
    lessons: [],
    subjects: [],
    events: [],
    temporary: {},
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
      const { data: events } = await axios.get(eventAPI);
      this.setState({ events });
    } catch {
      console.log("Error fetching data from the server on componentDidMount");
    }
  }
  
  render() {
    return (
      // <RegistrationForm/>
      <>
        <main className="mainContainer">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}/>
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
                path="/eventTable"
                element={
                  <EventTable
                    events={this.state.events}
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
                  events={this.state.events}
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
              <Route path="/addEvent"
                element={<EventForm
                  name="add"
                  events={this.state.events}
                  temporary={this.state.temporary}
                  formater={dateFormaterForInput}
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
                  formater={dateFormaterForInput}
                  onChange={this.handleChange}
                  create={this.createElement}
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
              <Route path="/updateEvent"
                element={<EventForm
                  name="update"
                  events={this.state.events}
                  temporary={this.state.temporary}
                  formater={dateFormaterForInput}
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
                  formater={dateFormaterForInput}
                  onChange={this.handleChange}
                  update={this.updateElement}
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