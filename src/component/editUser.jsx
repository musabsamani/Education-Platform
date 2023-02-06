import React, { Component } from "react";
import Input from "./_input";

class editStudent extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>Edit student Information</h2>
          <form className="col g-3" id="editstudent" onSubmit={(e) => this.props.onUpdate(e)}>
            <Input type="hidden" name="id" label="Id" value={this.props.student.id} />
            <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.student.name} />
            <Input onChange={this.props.onChange} type="text" name="age" label="Age" value={this.props.student.age} />
            <Input onChange={this.props.onChange} type="text" name="address" label="Address" value={this.props.student.address} />
            <Input onChange={this.props.onChange} type="text" name="phone" label="Phone" value={this.props.student.phone} />
            <div className="col mt-2">
              <button className="btn btn-success m-1" type="submit">Update</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default editStudent;
