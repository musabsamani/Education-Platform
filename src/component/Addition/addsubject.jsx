import React, { Component } from "react";
import Input from "../_input";


class AddSubject extends Component {
  render() {


    return (
      <>
        <div className="container mt-5 ">
          <h2>Sign as Student</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addUser" method="POST" onSubmit={(e) => this.props.createSubject(e)}>
            <Input onChange={this.props.onChangeSubject} type="text" name="subject" label="Subject Name" value={this.props.subject.name} />
            <div className="s col mt-2">
              <button onClick={() => this.props.createSubject} className="btn btn-primary m-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddSubject;
