import React, { Component } from "react";
import Input from "../include/_input";
import Textarea from "../include/_textarea";
import Select from "../include/_select";
import { sessionAPI } from "../../helpers/apiEndpoints";

class Lesson extends Component {
  state = { filee: {} }
  submit = e => {
    e.preventDefault()
    if (this.props.name === "add") {
      this.props.create(e, "lessons")
    }
    else {
      this.props.update(e, "lessons")
      // this.props.updateState("sessions", sessionAPI)
    }
  }
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Lesson" : "Edit Lesson"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" onSubmit={e => this.submit(e)}>
            <div className="col-md-5">
              <Select name="subject" onChange={this.props.onChange} value={this.props.temporary.subject} resourceArray={this.props.subjects} resoure="subject" resourceProperty="code" />
            </div>
            <div className="col-md-5">
              <Input type="text" name="name" label="Name" onChange={this.props.onChange} value={this.props.temporary.name} />
            </div>
            <div className="col-md-5">
              <Input type="file" name="file" label="File" />
            </div>
            {/* <Viewer
              fileUrl='/assets/pdf-open-parameters.pdf'
            /> */}
            <div className="col-md-5">
              <Textarea name="content" label="Content" onChange={this.props.onChange} value={this.props.temporary.content} />
            </div>
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

export default Lesson;
