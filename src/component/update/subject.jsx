import React, { Component } from "react";
import Input from "../include/_input";
class AddSubject extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Edit Subject</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addSubject" method="POST" onSubmit={(e) => this.props.updateSubject(e, "addSubject", "subjects")}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Subject Name" value={this.props.subject.name} />
            <div className="s col mt-2">
              <button onClick={() => this.props.createSubject} className="btn btn-primary m-1" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddSubject;