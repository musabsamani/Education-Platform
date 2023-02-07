//اثم
import React, { Component } from 'react';
import './App.css'
import Navbar from './component/navbar';
import Classes from './component/TableShow/classesTable';
import AddSubject from './component/Addition/addsubject'
import AddVolunteer from './component/Addition/addvolunteer';
import AddStudent from './component/Addition/addstudent';
import StudentTable from './component/TableShow/studentTable';
import EditUser from './component/editUser';
import Show from './component/TableShow/show';
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
    subjects: {},
    person: {},

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
    const person = {
      name: user.name,
      age: user.age,
      address: user.address,
      phone: user.phone,
      id: user._id,
    }
    this.setState({ person })
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
    const person = { id: '', name: '', age: '', address: '', phone: '', email: '', subject: '' }
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
  // =======  CREAT  ========

  /* ################################################################
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
    console.log(data)
    var request = {
      "url": `http://localhost:5000/api/${apiResource}`,
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
  updateUser = (e) => {
    e.preventDefault();
    var unindexd_array = $("#editUser").serializeArray();
    var user = {};
    $.map(unindexd_array, function (n, i) {
      user[n["name"]] = n["value"];
    });
    var request = {
      "url": `http://localhost:5000/api/users/${user.id}`,
      "method": "PUT",
      "data": user,
    };
    $.ajax(request).done((response) => {
      const users = [...this.state.users]
      users.forEach(person => {
        if (person._id === user.id) {
          Object.assign(person, user)
        }
      })
      this.setEmptyPerson()
      this.setState({ users });
      alert("User Updated Successfully !!!");
    })
  }
  // this method is used by home.jsx component by Delete Button
  // =======  DELETE  ========
  handleDelete = async id => {
    const users = this.state.users.filter(p => p._id !== id);
    this.setState({ users });
    await axios.delete(http.apiEndpoint + '/' + id);
    alert('User Deleted Successfuly')
  }

  render() {
    return (
      <>
        <Navbar />
        <main className='container-fluid'>
          <Routes>
            <Route path='/'
              element={<Home />} />
            <Route path='/addvolunteer'
              element={<AddVolunteer
                person={this.state.person}
                onChange={this.handleChange}
                createVolunteer={this.createElement}
              />} />
            <Route path='/addStudent'
              element={<AddStudent
                person={this.state.person}
                onChange={this.handleChange}
                createStudent={this.createElement}
              // soption={this.state.options} // ## select option  ******************************
              />} />
            <Route path='/addsubject'
              element={<AddSubject
                hsubject={this.state.person}
                onChangeSubject={this.handleChange}
                createSubject={this.createElement}
              />} />
            <Route path='/classesTable'
              element={<Classes
                volunteers={this.state.volunteers}
                person={this.state.person}
                onDelete={this.handleDelete}
                onUpdate={this.setPerson}
              />} />
            <Route path='/studentTable'
              element={<StudentTable
                students={this.state.students}
                person={this.state.person}
                onDelete={this.handleDelete}
                onUpdate={this.setPerson}
              />} />
            <Route path='/show'
              element={<Show />} />
            <Route path='/editUser'
              element={<EditUser
                user={this.state.person}
                onChange={this.handleChange}
                onUpdate={this.updateUser}
              />} />
          </Routes>
        </main>
      </>
    );
  }
}
export default App;