import React, { Component } from 'react';
import './App.css'
import Navbar from './component/navbar';
import Lesson from './component/addition/addlesson';
import Classes from './component/tableShow/lessonTable';
import AddSubject from './component/addition/addsubject'
import SubjectTable from './component/tableShow/subjectTable';
import AddVolunteer from './component/addition/addvolunteer';
import VolunteerTable from './component/tableShow/volunteerTable';
import AddStudent from './component/addition/addstudent';
import StudentTable from './component/tableShow/studentTable';
import EditUser from './component/editUser';
import Show from './component/tableShow/show';
import Home from './component/home';
import axios from 'axios';
import { studentAPI, volunteerAPI, tableAPI, subjectAPI } from "./server/apiEndpoints"
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
  setPerson = (user) => {
    console.log(user)
    const person = { ...user }
    console.log(this.state.show)
    this.setState({ show: person })
    console.log(this.state.show)
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
    const person = { id: '', name: '', age: '', address: '', phone: '', email: '', subject: '', volunteer: '', date: '' }
    this.setState({ person })
    return person
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
  createElement = (event, id, apiResource) => {
    event.preventDefault();
    var unindexd_array = $(`#${id}`).serializeArray();
    var data = {};
    $.map(unindexd_array, function (n, i) {
      data[n["name"]] = n["value"];
    });
    var request = {
      "url": `${apiResource}`,
      "method": `POST`,
      "data": data,
    };
    $.ajax(request).done((response) => {
      const element = [...this.state[apiResource], data]
      this.setState({ [apiResource]: element });
      this.setEmptyPerson()
      alert(`${apiResource} Added Successfully !!!`);
    })
  }

  // this method is used by addUser.jsx for creating new user when form is submited
  // by sendind request to the server
  // =======  UPDATE  ========
  updateElement = (event, id, apiResource) => {
    event.preventDefault();
    var unindexd_array = $(`#${id}`).serializeArray();
    var data = {};
    $.map(unindexd_array, function (n, i) {
      data[n["name"]] = n["value"];
    });
    var request = {
      "url": `${apiResource}`,
      "method": `PUT`,
      "data": data,
    };
    $.ajax(request).done((response) => {
      const element = [...this.state[apiResource], data]
      this.setState({ [apiResource]: element });
      this.setEmptyPerson()
      alert(`${apiResource} Updated Successfully !!!`);
    })
  }
  // this method is used by home.jsx component by Delete Button
  // =======  DELETE  ========
  deleteElement = async (id, apiResource) => {
    try {
      const data = this.state[apiResource].filter(element => element._id !== id);
      this.setState({ [apiResource]: data });
      console.log(data)
      await axios.delete(`${apiResource}/${id}`);
      alert(`${apiResource} Deleted Successfuly`)
    }
    catch {
      console.error(`Error Deleting ${apiResource}`)
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <main className='container-fluid'>
          <Routes>
            <Route path='/'
              element={<Home />} />
            /*
            ##################################
            volunteer Info
            ##################################
            */
            <Route path='/addvolunteer'
              element={<AddVolunteer
                person={this.state.person}
                subjects={this.state.subjects}
                onChange={this.handleChange}
                createVolunteer={this.createElement}
              />} />
            <Route path='/volunteerTable'
              element={<VolunteerTable
                volunteers={this.state.volunteers}
                onDelete={this.deleteElement}
              />} />
            /*
            ##################################
            Student Info
            ##################################
            */
            <Route path='/addStudent'
              element={<AddStudent
                person={this.state.person}
                onChange={this.handleChange}
                createStudent={this.createElement}
              />} />
            <Route path='/studentTable'
              element={<StudentTable
                students={this.state.students}
                person={this.state.person}
                onDelete={this.deleteElement}
                onUpdate={this.setPerson}
              />} />
            /*
            ##################################
            Subject Info
            ##################################
            */
            <Route path='/addsubject'
              element={<AddSubject
                hsubject={this.state.person}
                onChangeSubject={this.handleChange}
                createSubject={this.createElement}
              />} />
            <Route path='/subjectTable'
              element={<SubjectTable
                subjects={this.state.subjects}
                onDelete={this.deleteElement}
              />} />
            /*
            ##################################
            Classes Info
            ##################################
            */

            <Route path='/addlesson'
              element={<Lesson
                subjects={this.state.subjects}
                volunteers={this.state.volunteers}
                person={this.state.person}
                onChange={this.handleChange}
                onDelete={this.deleteElement}
                onUpdate={this.setPerson}
              />} />
            <Route path='/classesTable'
              element={<Classes
                Table={this.state.table}
                person={this.state.person}
                onDelete={this.deleteElement}
                setPerson={this.setPerson}
              />} />
            <Route path='/show'
              element={<Show
                vol={this.state.person}
              />} />
            /* ##########################3 */

          </Routes>
        </main>
      </>
    );
  }
}
export default App;