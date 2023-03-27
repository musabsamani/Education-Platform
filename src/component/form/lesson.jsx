import React, { Component } from "react";
import PopupSubject from "../dashboardComponent/Subject";
import Input from "../include/_input";
class Lesson extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>{this.props.name === "add" ? "New Lesson" : "Edit Lesson"}</h2>
          <form className="col g-3 d-flex-column justify-content-center" id={`${this.props.name}Lesson`} onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "addLesson", "lessons") : (e) => this.props.update(e, "updateLesson", "lessons")}>
            <div className="col-md-5">
              {this.props.subjects.length > 0 ? (
                <select onChange={this.props.onChange} value={this.props.temporary.subject} name="subject" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  {this.props.subjects.map((subject) => (
                    <option key={Math.random()} value={subject.value}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select disabled className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option>Subjects Database is Empty</option>
                </select>
              )}
            </div>
              <PopupSubject subject={this.props.subject}/>
            <div className="col-md-5">
              {this.props.volunteers.length > 0 ? (
                <select onChange={this.props.onChange} value={this.props.temporary.volunteer} name="volunteer" className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  {this.props.volunteers.map((volunteer) => (
                    <option key={Math.random()} value={volunteer.value}>
                      {volunteer.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select disabled className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option>Volunteers Database is Empty</option>
                </select>
              )}
            </div>
            {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
            <Input type="date" name="date" label="Date" onChange={this.props.onChange} value={this.props.formater(this.props.temporary.date)} />
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

export default Lesson;
