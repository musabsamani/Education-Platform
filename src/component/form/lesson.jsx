import React, { Component } from "react";
import Input from "../include/_input";
import Textarea from "../include/_textarea";
import Select from "../include/_select";
import { sessionAPI } from "../../helpers/apiEndpoints";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../../scss/submitionForm.scss';
import Subnav from "./subnav";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

class Lesson extends Component {
  state = { filee: {} }
  submit = e => {
    e.preventDefault()
    if (this.props.name === "add") {
      this.props.create(e, "lessons")
    }
    else {
      this.props.update(e, "lessons")
      // this.props.updateState("sessions", sessionAPI)
    }
  }
  render() {
    return (
      <>
        <div className="create_lesson_page">
          {/* ############################################## Start Header ################################################ */}
          <header className="create_lesson_navbar">
            <Subnav />
          </header>
          {/* ############################################## End Header ################################################ */}
          {/* ############################################## Start Main ################################################ */}
          <main className="create_lesson_content">
            <div className="create_header">
              <h1>Submit A New Lesson</h1>
            </div>
            <div className="create_formfield">
              <div className="create_formarea">
                <div className="bs-stepper-header">
                  <h2>{this.props.name === "add" ? "New Lesson" : "Edit Lesson"}</h2>

                </div>
                {/* ############# */}
                <div className="container mt-5 ">
                  <form className="col g-3 d-flex-column justify-content-center" onSubmit={e => this.submit(e)}>
                    <div className="col-md-5">
                      <Select name="subject" onChange={this.props.onChange} value={this.props.temporary.subject} resourceArray={this.props.subjects} resoure="subject" resourceProperty="code" />
                    </div>
                    <div className="col-md-5 m-1">
                      <Input type="text" name="name" label="Lesson Name" onChange={this.props.onChange} value={this.props.temporary.name} />
                    </div>
                    <div className="col-md-5 m-1 d-flex align-items-end">
                      <Input type="file" name="file" label="Files" args={{ multiple: true }} />
                      <span>
                        <button type="button" className="btn btn-outline-dark ms-2">
                          Dark <AddCircleOutlineIcon />
                        </button>
                      </span>
                    </div>
                    {/* <div className="col-md-5 m-1">
                      <Input type="file" name="filevid" label="Video Url" />
                    </div>
                    <div className="col-md-5 m-1">
                      <Input type="file" name="fileaud" label="Audio Url" />
                    </div> */}
                    <div className="col-md-5 m-1">
                      <Textarea name="content" label="Content" onChange={this.props.onChange} value={this.props.temporary.content} />
                    </div>
                    {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
                    <div className="col-md-2 mt-2">
                      <button className="btn btn-primary m-1" type="submit">
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
            <div className="logo"><a className="navbar-brand d-flex align-items-center" href="#"><AutoStoriesIcon />Unlimited Learning</a></div>
            <div>Copyrights ©2023. All rights reserved.</div>
            <div>icons</div>
          </footer>
          {/* ##############################################  End Footer ################################################ */}
        </div>
      </>
    );
  }
}

export default Lesson;

