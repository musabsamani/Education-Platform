import React, { Component } from "react";
import { Link } from "react-router-dom";
class Profile extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Voulunteer Information</h2>
          <div className="img">image here</div>
          <h5>name : {this.props.temporary.name}</h5>
          <h5>phone : {this.props.temporary.phone}</h5>
          <h5>age : {this.props.temporary.age}</h5>
          <h5>email : {this.props.temporary.email}</h5>
          <h5>subject : {this.props.temporary.subject}</h5>
          <h5>address : {this.props.temporary.address}</h5>
          <div className="col mt-2">
            <Link to="#">
              <button className="btn btn-success m-1" onClick={() => window.history.back()}>
                Back
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
