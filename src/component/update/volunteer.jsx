import React, { Component } from "react";
import Input from "../include/_input";
import "./addv.css";

class UpdateVolunteer extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Edit Voulunteer</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addVolunteer" method="POST" onSubmit={(e) => this.props.update(e, "addVolunteer", "volunteers")}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.temporary.name} />
            <Input onChange={this.props.onChange} type="text" name="age" label="Age" value={this.props.temporary.age} />
            <Input onChange={this.props.onChange} type="email" name="email" label="Email" value={this.props.temporary.email} />
            <Input onChange={this.props.onChange} type="text" name="address" label="Address" value={this.props.temporary.address} />
            <Input onChange={this.props.onChange} type="text" name="phone" label="Phone" value={this.props.temporary.phone} />
            <Input type="hidden" name="_id" value={this.props.temporary._id} />
            <div className="col-md-5">
              {this.props.subjects.length > 0 ? (
                <select name="subject" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  {this.props.subjects.map((subject) => (
                    <option key={Math.random()} value={subject.value}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select disabled className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option>Empty Database is Empty</option>
                </select>
              )}
            </div>
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

export default UpdateVolunteer;
