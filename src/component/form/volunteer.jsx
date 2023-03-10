import React, { Component } from "react";
import Input from "../include/_input";
import "../../scss/addvolunteer.scss"


const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img className="image" src={src} style={{ cursor: "pointer" }} />
    </div>
    {/* <input id="photo-upload" type="file" name="profileCover" onChange={onChange} /> */}
    <input id="photo-upload" type="file" name="profileCover" style={{ display: "none" }} onChange={onChange} />
  </label>
)
class AddVolunteer extends Component {
  src = this.props.temporary.profileCoverName ? this.props.temporary.profileCoverName : "src/assets/img/uploadCover.webp"
  state = {
    file: "",
    src: this.src
  };
  submit = async (e) => {
    e.preventDefault()
    await this.props.name === "add" ?
      this.props.create(e, "addVolunteer", "volunteers")
      :
      this.props.update(e, "updateVolunteer", "volunteers")
  }
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
        src: this.src
      })
    }
  }

  render() {
    const { src } = this.state;
    const { onChange, temporary, subjects } = this.props;
    return (
      <>
        <div className="_addvolunteer">
          <h2>{this.props.name === "add" ? "New Voulunteer" : "Edit Voulunteer"}</h2>
          <form
            className="formalation"
            id={`${this.props.name}Volunteer`}
            onSubmit={(e) => { this.submit(e) }}
          >
            <div className="immg">
              <ImgUpload onChange={this.photoUpload} src={src} />
            </div>
            <div className="_inputs">
              <Input onChange={onChange} type="text" name="name" label="Name" value={temporary.name} />
              <Input onChange={onChange} type="text" name="age" label="Age" value={temporary.age} />
              <Input onChange={onChange} type="email" name="email" label="Email" value={temporary.email} />
              <Input onChange={onChange} type="text" name="address" label="Address" value={temporary.address} />
              <Input onChange={onChange} type="text" name="phone" label="Phone" value={temporary.phone} />
              <Input type="hidden" name="time" label="time" value={new Date()} />
              {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
              <div className="selection">
                {subjects.length > 0 ? (
                  <select name="subject" className="" aria-label=".form-select-lg example">
                    {this.props.subjects.map((subject) => (
                      <option key={Math.random()} value={subject.value}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select disabled className="" aria-label=".form-select-lg example">
                    <option>Subjects Database is Empty</option>
                  </select>
                )}
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              {this.props.name == "add" ? "Submit" : "Save"}
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default AddVolunteer;