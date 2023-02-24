import React, { Component } from "react";
import Input from "../include/_input";
class AddEvent extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Event" : "Edit event"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" id={`${this.props.name}Event`} onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "addEvent", "events") : (e) => this.props.update(e, "updateEvent", "events")}>
            <Input onChange={this.props.onChange} type="text" name="title" label="Title" value={this.props.temporary.title} />
            <Input onChange={this.props.onChange} type="date" name="start" label="Start" value={this.props.temporary.start} />
            <Input onChange={this.props.onChange} type="date" name="end" label="End" value={this.props.temporary.end} />
            <div className="s col mt-2">
              <button className="btn btn-primary m-1" type="submit">
                {this.props.name === "add" ? "Submit" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddEvent;
