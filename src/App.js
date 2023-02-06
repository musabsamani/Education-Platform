import React, { Component } from 'react';
import './App.css'
import Navbar from './component/navbar';
import Classes from './component/TableShow/classesTable';
import AddSubject from './component/Addition/addsubject'
import AddVolunteer from './component/Addition/addvolunteer';
import AddStudent from './component/Addition/addstudent';
import EditUser from './component/editUser';
import Show from './component/TableShow/show';
import Home from './component/home';
import axios from 'axios';
import http from "./Server/httpserver.json";
import $ from "jquery"
import { Route, Routes } from 'react-router-dom';
class App extends Component {
  state = {
    users: [],
    person: {},
    subject:{}
    
  }
  
  // =================================
  // =================================
  // =====  HELPERS FUNCTION  ========
  // =================================
  // =================================
  // this react function is fired up when page load initially
  async componentDidMount() {
    try {
      const { data: users } = await axios.get(http.apiEndpoint)
      this.setState({ users })
    } catch {
      console.log("error fetching users")
    }
  }
  // this function is used by input fields to change person value while typing
  handleChange = (e) => {
    const person = { ...this.state.person };
    person[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ person })
  }
  handleChangeClass = (e) => {
    const subject = { ...this.state.subject};
    subject[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ subject })
  }
  // this method is used by Home.jsx update button to store the value of that
  // user and pass it to this.state.person
  // note that argument of this function "user" is the object we need to view its
  // value in input filds in editUser.jsx
  setPerson = (user) => {
    const person = {
      name: user.name,
      age:user.age,
      specialization: user.specialization,
      subject:user.subject,
      address: user.address,
      phone: user.phone,
      id: user._id,
    }
    this.setState({ person })
  }
  setsubject = (user) => {
    const subject = {
      subject:user.subject,
      id: user._id,
    }
    this.setState({ subject })
  }
  // this function is used to set person empty because
  //  when we create ne person we want fields to be empy
  setEmptyPerson = () => {
    const person = { id: '', name: '', age: '', specialization: '', subject: '', address: '', date: '', phone: '' }
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
  createUser = (e) => {
    e.preventDefault();
    var unindexd_array = $("#addUser").serializeArray();
    var user = {};
    $.map(unindexd_array, function (n, i) {
      user[n["name"]] = n["value"];
    });
    var request = {
      "url": `http://localhost:5000/api/users`,
      "method": "POST",
      "data": user,
    };
    $.ajax(request).done((response) => {
      const users = [...this.state.users, user]
      this.setState({ users });
      this.setEmptyPerson()
      alert("User Added Successfully !!!");
    })
  }
  /* ################################
              Creat A Class    
    #################################
  */
  createSubject = (e) => {
    e.preventDefault();
    var unindexd_array = $("#addsubject").serializeArray();
    var subj = {};
    $.map(unindexd_array, function (n, i) {
      subj[n["name"]] = n["value"];
    });
    var request = {
      "url": `http://localhost:5000/api/users`,
      "method": "POST",
      "data": subject,
    };
    $.ajax(request).done((response) => {
      const subject = [...this.state.subject, subj]
      this.setState({ subject });
      this.setEmptyPerson()
      alert("Subject Added Successfully !!!");
    })
  }

  /* #############                             #################
    ###############                          #####################
  ################### End of Creation Subject #######################
  */
  
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
              element={<Home/>} />
                <Route path='/addsubject'
                  element={<AddSubject
                    subject={this.state.subject}
                    onChange={this.handleChangeClass}
                    createSubject={this.createSubject}
                  />} />
            <Route path='/classesTable'
              element={<Classes
                users={this.state.users}
                person={this.state.person}
                onDelete={this.handleDelete}
                onUpdate={this.setPerson}
                />} />
                <Route path='/show'
                  element={<Show/>} />
            <Route path='/addvolunteer'
              element={<AddVolunteer
                person={this.state.person}
                onChange={this.handleChange}
                createUser={this.createUser}
                // soption={this.state.options} // ## select option  ******************************
              />} />
            <Route path='/addStudent'
              element={<AddStudent
                person={this.state.person}
                onChange={this.handleChange}
                createUser={this.createUser}
                // soption={this.state.options} // ## select option  ******************************
              />} />
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