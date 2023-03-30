import React, { Component } from "react";
import Input from "../include/_input";
import { isValidDate } from "../../helpers/helpersFunctions";
class AddEvent extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const notEmpty = typeof (this.props.temporary.start) == "string" && typeof (this.props.temporary.end) == "string"
    const isStartBeforeEnd = this.props.temporary.start <= this.props.temporary.end
    if (!notEmpty) {
      console.log("Both Start and End Dates Must Be Filled")
      return false
    }
    if (!isStartBeforeEnd) {
      console.log("End Date is Before Start Date")
      return false
    }
    let isValid = true;
    // note that if events are empty because state didnot load from cloud and still awaiting
    // there may be a collision. so we have two opttion to avoid this
    // 1 - run this function on the back-end
    // 2 - await untill App.jsx state.events load from database then allow updating or creating events 
    this.props.events.forEach(element => {
      if (!isValidDate(this.props.temporary, element)) {
        isValid = false
        return false
      }
    });
    if (isValid) {
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
          <form className="col g-3 d-flex-column justify-content-center" onSubmit={(e) => { this.handleSubmit(e) }}>
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
