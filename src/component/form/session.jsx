import React, { Component } from "react";
import Input from "../include/_input";
import Select from "../include/_select";
import { validator } from "../../helpers/helpersFunctions"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../../scss/submitionForm.scss';
import Subnav from "./subnav";

class sessionForm extends Component {
  handleSubmit = (e, array) => {
    e.preventDefault()
    const form = new FormData(e.target)
    let data = {}
    for (let [key, value] of form) {
      data[key] = value
    }
    this.props.setTemporary(data)
    let isValid = validator(array, this.props.temporary)
    if (isValid === true) {
      if (this.props.name === "add") {
        this.props.create(e, "sessions")
      } else {
        this.props.update(e, "sessions")
      }
    } else {
      this.props.messageShow(isValid[0], isValid[1])
      console.log(isValid[0], isValid[1])
    }
  }
  render() {
    return (
      <>
        <div className="create_session_page">
          {/* ############################################## Start Header ################################################ */}
          <header className="create_session_navbar">
            <Subnav />
          </header>
          {/* ############################################## End Header ################################################ */}
          {/* ############################################## Start Main ################################################ */}
          <main className="create_session_content">
            <div className="create_header">
              <h1>Submit A New Session</h1>
            </div>
            <div className="create_formfield">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit perspiciatis vitae dignissimos magni neque.</p>
              <div className="create_formarea">
                <div className="bs-stepper-header">
                  <h2>{this.props.name === "add" ? "New Session" : "Edit Session"}</h2>

                </div>
                {/* ########## */}
                <div className="container mt-5 ">
                  <form className="col g-3 d-flex-column justify-content-center" onSubmit={e => this.handleSubmit(e, this.props.sessions)}>
                    <Select onChange={this.props.onChange} name="subject" resourceArray={this.props.subjects} resourceProperty="code" value={this.props.temporary.subject} />
                    <Select onChange={this.props.onChange} name="lesson" resourceArray={this.props.lessons} resourceProperty="name" value={this.props.temporary.lesson} />
                    <Select onChange={this.props.onChange} name="room" resourceArray={this.props.rooms} resourceProperty="name" value={this.props.temporary.room} />
                    <Select onChange={this.props.onChange} name="volunteer" resourceArray={this.props.volunteers} resourceProperty="name" value={this.props.temporary.volunteer} />
                    <Input onChange={this.props.onChange} type="date" name="start" label="Start" value={this.props.temporary.start} />
                    <Input onChange={this.props.onChange} type="date" name="end" label="End" value={this.props.temporary.end} />
                    {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
                    <div className="s col mt-2">
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
          <footer className="create_session_bottom">
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

export default sessionForm;
{/*
  <>
    
  </>
*/}
