import React, { Component } from "react";
import { Link } from "react-router-dom";

// class SubjectTable extends Component {
//   render() {
//     return (
class Profile extends Component {
  render() {
    const person = this.props.person;
    return (
      <>
        <div className="container mt-5 ">
          <h2>Voulunteer Information</h2>
          <div className="img">image here</div>
          <h5>name : {person.name}</h5>
          <h5>phone : {person.phone}</h5>
          <h5>age : {person.age}</h5>
          <h5>email : {person.email}</h5>
          <h5>subject : {person.subject}</h5>
          <h5>address : {person.address}</h5>
          <div className="col mt-2">
            <Link to="#" onClick={() => window.history.back()}>
              <button className="btn btn-success m-1">Back</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
