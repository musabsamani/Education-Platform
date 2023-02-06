import React, { Component } from 'react';
import './App.css'
import Navbar from './component/navbar';
import Classes from './component/classes';
import AddVolunteer from './component/addvolunteer';
import EditUser from './component/editUser';
import Show from './component/show';
import Home from './component/home';
import axios from 'axios';
import http from "./Server/httpserver.json";
import $ from "jquery"
import { Route, Routes } from 'react-router-dom';
class App extends Component {
  state = {
    users: [],
    person: {},
    options :[
      {
        label: "Math",
        value: "math",
      },
      {
        label: "Arabic",
        value: "arabic",
      },
      {
        label: "Islamya",
        value: "islamya",
      },
      {
        label: "Attitute",
        value: "attitute",
      },
    ]
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
  // this method is used by Home.jsx update button to store the value of that
  // user and pass it to this.state.person
  // note that argument of this function "user" is the object we need to view its
  // value in input filds in editUser.jsx
  setPerson = (user) => {
    const person = {
      name: user.name,
      specialization: user.specialization,
      subject:user.subject,
      address: user.address,
      phone: user.phone,
      id: user._id,
    }
    this.setState({ person })
  }
  // this function is used to set person empty because
  //  when we create ne person we want fields to be empy
  setEmptyPerson = () => {
    const person = { id: '', name: '', specialization: '',subject:'', address: '', phone: '' }
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
            <Route path='/classes'
              element={<Classes
                users={this.state.users}
                person={this.state.person}
                onDelete={this.handleDelete}
                onUpdate={this.setPerson}
              />} />
            <Route path='/addvolunteer'
              element={<AddVolunteer
                person={this.state.person}
                onChange={this.handleChange}
                createUser={this.createUser}
                soption={this.state.options} // ## select option  ******************************
              />} />
            <Route path='/editUser'
              element={<EditUser
                user={this.state.person}
                onChange={this.handleChange}
                onUpdate={this.updateUser}
              />} />
            <Route path='/show'
              element={<Show/>} />
          </Routes>
        </main>
      </>
    );
  }
}
export default App;