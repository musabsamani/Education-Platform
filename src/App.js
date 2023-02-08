// kdkdmkmcknj
import React, { Component } from 'react';
import './App.css'
import Navbar from './component/navbar';
import Addlesson from './component/add/addlesson';
import LessonTable from './component/show/lessonTable';
import AddSubject from './component/add/addsubject'
import SubjectTable from './component/show/subjectTable';
import AddVolunteer from './component/add/addvolunteer';
import VolunteerTable from './component/show/volunteerTable';
import AddStudent from './component/add/addstudent';
import StudentTable from './component/show/studentTable';
import Profile from './component/show/profile';
import Home from './component/home';
import axios from 'axios';
import { studentAPI, volunteerAPI, tableAPI, subjectAPI, baseAPI } from "./helpers/apiEndpoints"
import $ from "jquery"
import { Route, Routes } from 'react-router-dom';


class App extends Component {
  state = {
    students: [],
    volunteers: [],
    table: [],
    subjects: [],
    person: {},
    show: {}

  }
  baseAPI = baseAPI

  // =================================
  // =================================
  // =====  HELPERS FUNCTION  ========
  // =================================
  // =================================
  // this react function is fired up when page load initially
  async componentDidMount() {
    try {
      const { data: students } = await axios.get(studentAPI)
      this.setState({ students })
      const { data: volunteers } = await axios.get(volunteerAPI)
      this.setState({ volunteers })
      const { data: table } = await axios.get(tableAPI)
      this.setState({ table })
      const { data: subjects } = await axios.get(subjectAPI)
      this.setState({ subjects })
      // console.log(this.state)

    } catch {
      console.log("error fetching data from the server")
    }
  }
  handleChange = (e) => {
    const person = { ...this.state.person };
    person[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ person })
  }
  // this method is used by Home.jsx update button to store the value of that
  // user and pass it to this.state.person
  // note that argument of this function "user" is the object we need to view its
  // value in input filds in editUser.jsx
  setPerson = (element,) => {
    this.setState({ person: element })
  }
  setsubject = (user) => {
    const subject = {
      subject: user.subject,
      id: user._id,
    }
    this.setState({ subject })
  }
  // this function is used to set person empty because
  //  when we create ne person we want fields to be empy
  setEmptyPerson = () => {
    this.setState({ person: {} })
  }
  // =================================
  // =================================
  // ======   CRUD FUNCTION   ========
  // =================================
  // =================================
  // this method is used by addUser.jsx for creating new user when form is submited
  // by sendind request to the server

  /* ################################################################
                              Creat 
    ###############################################################
   *//* ################################################################
Creat 
###############################################################
*/
  createElement = (event, id, resource) => {
    event.preventDefault();
    var unindexd_array = $(`#${id}`).serializeArray();
    var data = {};
    const uri = `${this.baseAPI}/${resource}`
    $.map(unindexd_array, function (n, i) {
      data[n["name"]] = n["value"];
    });
    var request = {
      "url": `${uri}`,
      "method": `POST`,
      "data": data,
    };
    $.ajax(request).done((response) => {
      const element = [...this.state[resource], data]
      this.setState({ [resource]: element });
      this.setEmptyPerson()
      alert(`${resource} Added Successfully !!!`);
    })
  }

  // this method is used by addUser.jsx for creating new user when form is submited
  // by sendind request to the server
  // =======  UPDATE  ========
  updateElement = (event, id, resource) => {
    event.preventDefault();
    var unindexd_array = $(`#${id}`).serializeArray();
    var data = {};
    const uri = `${this.baseAPI}/${resource}`
    $.map(unindexd_array, function (n, i) {
      data[n["name"]] = n["value"];
    });
    var request = {
      "url": `${uri}`,
      "method": `PUT`,
      "data": data,
    };
    $.ajax(request).done((response) => {
      const element = [...this.state[resource], data]
      this.setState({ [resource]: element });
      this.setEmptyPerson()
      alert(`${resource} Updated Successfully !!!`);
    })
  }
  // this method is used by home.jsx component by Delete Button
  // =======  DELETE  ========
  deleteElement = async (id, resource) => {
    try {
      const uri = `${this.baseAPI}/${resource}`
      const data = this.state[resource].filter(element => element._id !== id);
      this.setState({ [resource]: data });
      await axios.delete(`${uri}/${id}`);
      // alert(`${resource} Deleted Successfuly`)
    }
    catch {
      console.error(`Error Deleting ${resource}`)
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <main className='container-fluid'>
          <Routes>
            <Route path='/'
              element={<Home setEmptyPerson={this.setEmptyPerson} />} />
            <Route path='/volunteerTable'
              element={<VolunteerTable
                volunteers={this.state.volunteers}
                onDelete={this.deleteElement}
                person={this.state.person}
                setPerson={this.setPerson}
                setEmptyPerson={this.setEmptyPerson}
              />} />
            <Route path='/studentTable'
              element={<StudentTable
                students={this.state.students}
                onDelete={this.deleteElement}
                person={this.state.person}
                setPerson={this.setPerson}
                setEmptyPerson={this.setEmptyPerson}
              />} />
            <Route path='/subjectTable'
              element={<SubjectTable
                subjects={this.state.subjects}
                onDelete={this.deleteElement}
                person={this.state.person}
                setPerson={this.setPerson}
                setEmptyPerson={this.setEmptyPerson}
              />} />
            <Route path='/lessonTable'
              element={<LessonTable
                Table={this.state.table}
                onDelete={this.deleteElement}
                person={this.state.person}
                setPerson={this.setPerson}
                setEmptyPerson={this.setEmptyPerson}
              />} />
            <Route path='/profile'
              element={<Profile
                person={this.state.person}
              />} />

            <Route path='/addStudent'
              element={<AddStudent
                person={this.state.person}
                onChange={this.handleChange}
                createStudent={this.createElement}
              />} />

            <Route path='/addvolunteer'
              element={<AddVolunteer
                person={this.state.person}
                subjects={this.state.subjects}
                onChange={this.handleChange}
                createVolunteer={this.createElement}
              />} />
            <Route path='/addsubject'
              element={<AddSubject
                hsubject={this.state.person}
                onChangeSubject={this.handleChange}
                createSubject={this.createElement}
              />} />
            <Route path='/addlesson'
              element={<Addlesson
                subjects={this.state.subjects}
                volunteers={this.state.volunteers}
                person={this.state.person}
                onChange={this.handleChange}
                createlesson={this.createElement}
              />} />

          </Routes>
        </main>
      </>
    );
  }
}
export default App;
