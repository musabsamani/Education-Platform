import React, { Component } from "react";
import Input from "../include/_input";
import { validator } from "../../helpers/helpersFunctions";
class AddEvent extends Component {
  handleSubmit = (e, Array, temporary) => {
    e.preventDefault()
    let isValid = validator(Array, temporary)
    if (isValid) {
      console.log("valid event !!!")
      if (this.props.name === "add") {
        this.props.create(e, "events")
      } else {
        this.props.update(e, "events")
      }
    } else {
      console.log("event not valid")
    }
  }
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Event" : "Edit event"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" onSubmit={(e) => { this.handleSubmit(e, this.props.events, this.props.temporary) }}>
            <Input onChange={this.props.onChange} type="text" name="title" label="Title" value={this.props.temporary.title} />
            <Input onChange={this.props.onChange} type="date" name="start" label="Start" value={this.props.temporary.start} />
            <Input onChange={this.props.onChange} type="date" name="end" label="End" value={this.props.temporary.end} />
            {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
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
