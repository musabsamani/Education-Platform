import React, { Component } from "react";
import Input from "../include/_input";
import Select from "../include/_select";
import { validator } from "../../helpers/helpersFunctions"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

class AddStudent extends Component {
  handleSubmit = (e, array, temporary) => {
    e.preventDefault()
    let isValid = validator(array, temporary)
    if (isValid) {
      if (this.props.name === "add") {
        this.props.create(e, "sessions")
      } else {
        this.props.update(e, "sessions")
      }
    } else {
      console.log("event not valid")
    }
  }
  render() {
    return (
      <>
        <div className="create_session_page">
          {/* ############################################## Start Header ################################################ */}
          <header className="create_session_navbar">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><AutoStoriesIcon />Unlimited Learning</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled">Disabled</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </div>
              </div>
            </nav>
          </header>
          {/* ############################################## End Header ################################################ */}
          {/* ############################################## Start Main ################################################ */}
          <main className="create_session_content">
            <div className="create_session_header">
              <h1>Submit A New Session</h1>
            </div>
            <div className="create_session_formfield">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit perspiciatis vitae dignissimos magni neque.</p>
              <div className="create_session_formArea">

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

export default AddStudent;

{/* <div className="container mt-5 ">
  <h2>{this.props.name === "add" ? "New Session" : "Edit Session"}</h2>
  <form className="col g-3 d-flex-column justify-content-center" onSubmit={e => this.handleSubmit(e, this.props.sessions, this.props.temporary)}>
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
</div> */}