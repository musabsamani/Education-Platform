import React, { Component } from "react";
import Input from "../include/_input";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

class Subject extends Component {
  render() {
    return (
      <>
        <div className="create_subject_page">
          {/* ############################################## Start Header ################################################ */}
          <header className="create_subject_navbar">
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
          <main className="create_subject_content">
            <div className="create_subject_header">
              <h1>Submit A New Subject</h1>
            </div>
            <div className="create_subject_formfield">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit perspiciatis vitae dignissimos magni neque.</p>
              <div className="create_subject_formArea">

              </div>
            </div>
          </main>
          {/* ############################################## End Main ################################################ */}
          {/* ############################################## Start Footer ################################################ */}
          <footer className="create_subject_bottom">
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


{/* <div className="container">
  <h2>{this.props.name === "add" ? "New Subject" : "Edit Subject"}</h2>
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
</div> */}