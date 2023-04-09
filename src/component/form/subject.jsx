import React, { Component } from "react";
import Input from "../include/_input";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../../scss/submitionForm.scss';
import Subnav from "./subnav";
class Subject extends Component {
  render() {
    return (
      <>
        <div className="create_subject_page">
          {/* ############################################## Start Header ################################################ */}
          <header className="create_lesson_navbar">
            <Subnav />
          </header>
          {/* ############################################## End Header ################################################ */}
          {/* ############################################## Start Main ################################################ */}
          <main className="create_content">
            <div className="create_header">
              <h1>Submit A New Subject</h1>
            </div>
            <div className="create_formfield">
              <div className="create_formarea">
                <div className="bs-stepper-header">
                  <h2>{this.props.name === "add" ? "New Subject" : "Edit Subject"}</h2>

                </div>
                {/* ############# */}
                <div className="container mt-5 ">
                  <form className="col g-3 d-flex-column justify-content-center" onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "subjects") : (e) => this.props.update(e, "subjects")}>
                    <Input onChange={this.props.onChange} type="text" name="code" label="Subject Code" value={this.props.temporary.code} />
                    <Input onChange={this.props.onChange} type="text" name="name" label="Subject Name" value={this.props.temporary.name} />
                    <Input onChange={this.props.onChange} type="text" name="description" label="Subject Description" value={this.props.temporary.description} />
                    {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
                    <div className="s col mt-2">
                      <button onClick={() => this.props.createSubject} className="btn btn-primary m-1" type="submit">
                        {this.props.name == "add" ? "Submit" : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
          {/* ############################################## End Main ################################################ */}
          {/* ############################################## Start Footer ################################################ */}
          <footer className="create_bottom">
            <div className="logo"><a className="navbar-brand" href="#"><AutoStoriesIcon />Unlimited Learning</a></div>
            <div>Copyrights ©2023. All rights reserved.</div>
            <div>icons</div>
          </footer>
          {/* ##############################################  End Footer ################################################ */}
        </div>
      </>
    );
  }
}

export default Subject;


