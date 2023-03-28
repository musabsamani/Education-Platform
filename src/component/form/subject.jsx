import React, { Component } from "react";
import Input from "../include/_input";
class Subject extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Subject" : "Edit Subject"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "subjects") : (e) => this.props.update(e, "subjects")}>
            <Input onChange={this.props.onChange} type="text" name="code" label="Subject Code" value={this.props.temporary.code} />
            <Input onChange={this.props.onChange} type="text" name="name" label="Subject Name" value={this.props.temporary.name} />
            <Input onChange={this.props.onChange} type="text" name="description" label="Subject Description" value={this.props.temporary.description} />
            {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
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

export default Subject;
