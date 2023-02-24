import React, { Component } from "react";
import Input from "../include/_input";
class AddSubject extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Subject" : "Edit Subject"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" id={`${this.props.name}Subject`} onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "addSubjects", "students") : (e) => this.props.update(e, "updateSubjects", "subjects")}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Subject Name" value={this.props.temporary.name} />
            <div className="s col mt-2">
              <button onClick={() => this.props.createSubject} className="btn btn-primary m-1" type="submit">
                {this.props.name == "add" ? "Submit" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddSubject;
