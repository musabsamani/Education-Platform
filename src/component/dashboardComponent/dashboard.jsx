import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Sidebar from '../sidebar';
import Adminbar from "../adminbar";
import Email from '../email';
import { sendMail } from "../../helpers/crudFunctions";
import "../../scss/dashboard.scss";
import Propabilities from './propabities';
import Chart from './chart';
import Block1 from './block1';
import Notify from './notify';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.sendMail = sendMail.bind(this);
    }
    render() {
        return (
            < div className='main' >
                <Sidebar />
                <div className='content'>
                    <Adminbar />
                    <div className='content_area'>
                        <h1>Dashboard</h1>
                        <Propabilities
                            volunteers={this.props.volunteers}
                            students={this.props.students}
                            sessions={this.props.sessions}
                            subjects={this.props.subjects} />
                        <div className="row g-4 mb-4">
                            <Chart
                                volunteers={this.props.volunteers}
                                students={this.props.students}
                                sessions={this.props.sessions} />
                            <Block1 />

                        </div>
                        <Notify />
                        <div className="emailContainer me-5 mb-5">
                            <Email
                                sendMail={this.sendMail}
                            />
                        </div >
                    </div>
                </div>
            </div >
        );
    }
}

export default Dashboard;