import React, { Component } from "react";
import Input from "../include/_input";
import Subnav from "./subnav";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

class Room extends Component {
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
              <h1>Submit A New Room</h1>
            </div>
            <div className="create_lesson_formfield">
              <div className="create_lesson_formarea">
                <div className="bs-stepper-header">
                  <h2>{this.props.name === "add" ? "New Room" : "Edit Room"}</h2>
                </div>
                {/* ############# */}
                <div className="container mt-5 ">
                  <form className="col g-3 d-flex-column justify-content-center" onSubmit={this.props.name === "add" ? (e) => this.props.create(e, "rooms") : (e) => { this.props.update(e, "rooms") }}>
                    <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.temporary.name} />
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

export default Room;