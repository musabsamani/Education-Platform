import React, { Component } from "react";
import Input from "../include/_input";
class AddSubject extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Edit Event</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="updateEvent" method="POST" onSubmit={(e) => this.props.update(e, "updateEvent", "events")}>
            <Input onChange={this.props.onChange} type="text" name="title" label="Title" value={this.props.event.name} />
            <Input onChange={this.props.onChange} type="date" name="start" label="Start" value={this.props.event.start} />
            <Input onChange={this.props.onChange} type="date" name="end" label="End" value={this.props.event.end} />
            <Input type="hidden" name="_id" value={this.props.event._id} />
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
