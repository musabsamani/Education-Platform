import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Chart from './dashboardComponent/chart';
import "../scss/dashboard.scss"
import Profile from './show/profile';
import VolunteerTable from './show/volunteerTable';
import Sidebar from './sidebar';
import Adminbar from "./adminbar";
import Email from './email';
import { sendMail } from "../helpers/crudFunctions";
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
                    <hr />
                    <div className="center">
                        {/* <Subject />
                        <Subject />
                        <Subject />
                        <Subject /> */}
                        <Chart volunteers={this.props.volunteers} />
                        <div className="msg">
                            <Email
                                sendMail={this.sendMail}
                            />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Dashboard;