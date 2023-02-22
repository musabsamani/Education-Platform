import React, { Component } from "react";
import Input from "../include/_input";
class AddStudent extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>New Event</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addEvent" onSubmit={(e) => this.props.create(e, "addEvent", "events")}>
            <Input onChange={this.props.onChange} type="text" name="title" label="Title" value={this.props.temporary.title} />
            <Input onChange={this.props.onChange} type="date" name="start" label="Start" value={this.props.temporary.start} />
            <Input onChange={this.props.onChange} type="date" name="end" label="End" value={this.props.temporary.end} />
            <div className="s col mt-2">
              <button className="btn btn-primary m-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddStudent;
