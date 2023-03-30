import React, { Component } from "react";
import Input from "../include/_input";
import Select from "../include/_select";
import { validator } from "../../helpers/helpersFunctions"
class Session extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "Create Session" : "Edit Session"}</h2>
        </div>
      </>
    )
  }
}
class AddStudent extends Component {
  handleSubmit = (e, array, temporary) => {
    e.preventDefault()
    let isValid = validator(array, temporary)
    if (isValid) {
      if (this.props.name === "add") {
        this.props.create(e, "sessions")
      } else {
        this.props.update(e, "sessions")
      }
    } else {
      console.log("event not valid")
    }
  }
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Session" : "Edit Session"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" onSubmit={e => this.handleSubmit(e, this.props.sessions, this.props.temporary)}>
            <Select onChange={this.props.onChange} name="subject" resourceArray={this.props.subjects} resourceProperty="code" value={this.props.temporary.subject} />
            <Select onChange={this.props.onChange} name="lesson" resourceArray={this.props.lessons} resourceProperty="name" value={this.props.temporary.lesson} />
            <Select onChange={this.props.onChange} name="room" resourceArray={this.props.rooms} resourceProperty="name" value={this.props.temporary.room} />
            <Select onChange={this.props.onChange} name="volunteer" resourceArray={this.props.volunteers} resourceProperty="name" value={this.props.temporary.volunteer} />
            <Input onChange={this.props.onChange} type="date" name="start" label="Start" value={this.props.temporary.start} />
            <Input onChange={this.props.onChange} type="date" name="end" label="End" value={this.props.temporary.end} />
            {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
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

export default AddStudent;
