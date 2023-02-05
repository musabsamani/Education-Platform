import React, { Component } from "react";
import Input from "./_input";

class AddVoulunteer extends Component {
  render() {

    const options = [
      {
        label: "Math",
        value: "math",
      },
      {
        label: "Arabic",
        value: "arabic",
      },
      {
        label: "Islamya",
        value: "islamya",
      },
      {
        label: "Attitute",
        value: "attitute",
      },
    ];

    return (
      <>
        <div className="container mt-5 ">
          <h2>Sign as Voulunteer</h2>
          <form className="col g-3" id="addUser" method="POST" onSubmit={(e) => this.props.createUser(e)}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.person.name} />
            <Input onChange={this.props.onChange} type="text" name="specializaiton" label="Pro-Specialization" value={this.props.person.specializaiton} />
            <label htmlFor="subject">Subject</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Choose a Subject from this menu</option>
              {options.map((option) =>
              (<option value={option.value}>{option.label}</option>
              ))}
            </select>
            <Input onChange={this.props.onChange} type="text" name="address" label="Address" value={this.props.person.address} />
            <Input onChange={this.props.onChange} type="text" name="phone" label="Phone" value={this.props.person.phone} />
            <div className="col mt-2">
              <button onClick={() => this.props.handleUpdate} className="btn btn-primary m-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddVoulunteer;
