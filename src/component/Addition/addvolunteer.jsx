import React, { Component } from "react";
import Input from "../_input";
import "./addv.css";

class AddVolunteer extends Component {
  render() {

    return (
      <>
        <div className="container mt-5 ">
          <h2>Sign as Voulunteer</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addVolunteer" method="POST" onSubmit={(e) => this.props.createVolunteer(e, "addVolunteer", "volunteers")}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.person.name} />
            <Input onChange={this.props.onChange} type="text" name="age" label="Age" value={this.props.person.age} />
            <Input onChange={this.props.onChange} type="email" name="email" label="Email" value={this.props.person.email} />
            <Input onChange={this.props.onChange} type="text" name="address" label="Address" value={this.props.person.address} />
            <Input onChange={this.props.onChange} type="text" name="phone" label="Phone" value={this.props.person.phone} />
            <select name="subject" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Choose a Subject from this menu</option>
              {this.props.subjects.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
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

export default AddVolunteer;
