import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Chart from './chart';
import "../scss/dashboard.scss"
import Profile from './show/profile';
import VolunteerTable from './show/volunteerTable';
import Sidebar from './sidebar';
import Adminbar from "./adminbar";
import Example from './eemail';
import Email from './email';


// console.log(this.props.volunteers)
class Dashboard extends Component {
    render() {
        // console.log(this.props.volunteers)
        return (
            < div className='main' >
                <Sidebar />
                <div className='content'>
                    <Adminbar />
                    <hr />
                    <div className="center">
                        <div className="msg">
                            <Email/>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Dashboard;