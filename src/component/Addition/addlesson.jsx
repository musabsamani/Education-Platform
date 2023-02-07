import React, { Component } from "react";
import Input from "../_input";

class Lesson extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>New Lesson</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addstudent" onSubmit={(e) => this.props.createStudent(e, "#addstudent", "students")}>
            <Input onChange={this.props.onChange} type="text" name="subject" label="Subject" value={this.props.person.subject} />
            <Input onChange={this.props.onChange} type="text" name="volunteer" label="Volunteer" value={this.props.person.volunteer} />
            <Input onChange={this.props.onChange} type="text" name="date" label="Date" value={this.props.person.date} />
            <div className="s col mt-2">
              <button onClick={() => this.props.handleE} className="btn btn-primary m-1" type="submit">
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
