import React, { Component } from "react";
import Input from "../include/_input";
class Room extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Room" : "Edit Room"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "rooms") : (e) => { this.props.update(e, "rooms") }}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.temporary.name} />
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

export default Room;
