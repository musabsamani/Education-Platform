import React, { Component } from "react";
import Input from "../include/_input";
class AddSubject extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Edit Subject</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="updateSubject" method="POST" onSubmit={(e) => this.props.update(e, "updateSubject", "subjects")}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Subject Name" value={this.props.subject.name} />
            <Input type="hidden" name="_id" value={this.props.subject._id} />
            <div className="s col mt-2">
              <button className="btn btn-primary m-1" type="submit">
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
