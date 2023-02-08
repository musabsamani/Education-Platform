import React, { Component } from "react";
import { Link } from "react-router-dom";
class Profile extends Component {
  render() {
    const element = this.props.data;
    return (
      <>
        <div className="container mt-5 ">
          <h2>Voulunteer Information</h2>
          <div className="img">image here</div>
          <h5>name : {element.name}</h5>
          <h5>phone : {element.phone}</h5>
          <h5>age : {element.age}</h5>
          <h5>email : {element.email}</h5>
          <h5>subject : {element.subject}</h5>
          <h5>address : {element.address}</h5>
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
