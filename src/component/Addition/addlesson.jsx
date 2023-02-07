import React, { Component } from "react";
import Input from "../_input";

class Lesson extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>New Lesson</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addlesson" onSubmit={(e) => this.props.createlesson(e, "addlesson", "table")}>
          <select name="subject" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected >Choose a Subject from this menu</option>
              {this.props.subjects.map((subject) => (
                <option value={subject.value}>{subject.name}</option>
              ))}
          </select>
          <select name="volunteer" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Choose a Voulunteer from this menu</option>
              {this.props.volunteers.map((volunteer) => (
                <option value={volunteer.value}>{volunteer.name}</option>
              ))}
          </select>
            <Input onChange={this.props.onChange} type="date" name="date" label="Date" value={this.props.person.date} />
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

export default Lesson;
