import React, { Component } from "react";
import Input from "../include/_input";
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
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Session" : "Edit Session"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "sessions") : (e) => this.props.update(e, "sessions")}>
            <Input onChange={this.props.onChange} type="text" name="subjectCode" label="SubjectCode" value={this.props.temporary.subjectCode} />
            <Input onChange={this.props.onChange} type="text" name="lesson" label="Lesson" value={this.props.temporary.lesson} />
            <Input onChange={this.props.onChange} type="text" name="room" label="Room" value={this.props.temporary.room} />
            <Input onChange={this.props.onChange} type="text" name="volunteer" label="Volunteer" value={this.props.temporary.volunteer} />
            <Input onChange={this.props.onChange} type="text" name="start" label="Start" value={this.props.temporary.start} />
            <Input onChange={this.props.onChange} type="text" name="end" label="End" value={this.props.temporary.end} />
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
