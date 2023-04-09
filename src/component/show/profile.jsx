import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../scss/profile.scss"

const ImgUpload = ({
  src
}) =>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img className="image" id="photo-upload" src={src} />
    </div>
  </label>
class Profile extends Component {
  src = this.props.temporary.profileCover ? this.props.temporary.profileCover : "src/assets/img/uploadCover.webp"
  state = {
    src: this.src,
    file: '',
  }
  render() {
    const { src } = this.state;
    const { temporary } = this.props
    return (
      <>
        <div className="_profile">
          <div className="title">
            <h2>Voulunteer Information</h2>
          </div>
          <div className="_body">
            <div className="_image">
              <ImgUpload src={src} />
            </div>
            <div className="_inform">
              <h5>name : {temporary.name}</h5>
              <h5>phone : {temporary.phone}</h5>
              <h5>age : {temporary.age}</h5>
              <h5>email : {temporary.email}</h5>
              <h5>subject : {temporary.subject && temporary.subject.code}</h5>
              <h5>address : {temporary.address}</h5>
              <h5>time : {temporary.time}</h5>
            </div>
          </div>
          <div className="_button">
            <Link to="#"><button className="btn btn-success" onClick={() => window.history.back()}>Back</button></Link>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
