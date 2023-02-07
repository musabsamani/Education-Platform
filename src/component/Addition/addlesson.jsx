import React, { Component } from "react";
import Input from "../_input";

class Lesson extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>New Lesson</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addlesson" onSubmit={(e) => this.props.createStudent(e, "#addlesson", "lessons")}>
          <select name="subject" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Choose a Subject from this menu</option>
              {this.props.subjects.map((subject) => (
                <option value={subject.value}>{subject.label}</option>
              ))}
          </select>
          <select name="volunteer" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Choose a Voulunteer from this menu</option>
              {this.props.volunteers.map((volunteer) => (
                <option value={volunteer.value}>{volunteer.label}</option>
              ))}
          </select>
            <Input onChange={this.props.onChange} type="text" name="date" label="Date" value={this.props.person.date} />
            <div className="s col mt-2">
              <button onClick={() => this.props.handleElement} className="btn btn-primary m-1" type="submit">
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
