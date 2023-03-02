import React, { Component } from "react";
import Input from "../include/_input";
import "./addv.css";
// import profile_img from "../show/download.png";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img className="image" src={src} style={{ cursor: "pointer" }} />
      <input id="photo-upload" type="file" name="profileCover" style={{ display: "none" }} onChange={onChange} />
    </div>
  </label>
);
class AddVolunteer extends Component {
  state = {
    file: "",
    src: this.props.temporary.profileCoverName ? this.props.temporary.profileCoverName : "src/assets/img/uploadCover.webp",
  };
  submit = (e) => {
    e.preventDefault()
    this.props.name === "add" ?
      this.props.create(e, "profileCover", "addVolunteer", "volunteers")
      :
      this.props.update(e, "profileCover", "updateVolunteer", "volunteers");
  };
  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          file: file,
          src: reader.result,
        })
      }
    } else {
      this.setState({
        file: "",
        src: this.props.temporary.profileCoverName ? this.props.temporary.profileCoverName : "src/assets/img/uploadCover.webp"
      })
    }
  }

  render() {
    const { src } = this.state;
    const { onChange, temporary, subjects } = this.props;
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Voulunteer" : "Edit Voulunteer"}</h2>
          <form
            className="col g-3 d-flex-column justify-content-center"
            id={`${this.props.name}Volunteer`}
            onSubmit={(e) => { this.submit(e) }}
          >
            <div>
              <ImgUpload onChange={this.photoUpload} src={src} />
            </div>
            <Input onChange={onChange} type="text" name="name" label="Name" value={temporary.name} />
            <Input onChange={onChange} type="text" name="age" label="Age" value={temporary.age} />
            <Input onChange={onChange} type="email" name="email" label="Email" value={temporary.email} />
            <Input onChange={onChange} type="text" name="address" label="Address" value={temporary.address} />
            <Input onChange={onChange} type="text" name="phone" label="Phone" value={temporary.phone} />
            {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
            <div className="col-md-5">
              {subjects.length > 0 ? (
                <select name="subject" className=" sel ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  {this.props.subjects.map((subject) => (
                    <option key={Math.random()} value={subject.value}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select disabled className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option>Subjects Database is Empty</option>
                </select>
              )}
            </div>
            <div className="s col mt-2">
              <button className="btn btn-primary m-1" type="submit">
                {this.props.name == "add" ? "Submit" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default AddVolunteer;