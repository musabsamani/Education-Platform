import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Sidebar from '../sidebar';
import Adminbar from "../adminbar";
import Email from '../email';
import { sendMail } from "../../helpers/crudFunctions";

import "../../scss/dashboard.scss"

// console.log(this.props.volunteers)
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
                    <div className="center">

                    </div>
                </div>
            </div >
        );
    }
}

export default Dashboard;
                        // <div className="msg">
                        //     <Email
                        //         sendMail={this.sendMail}
                        //     />
                        // </div >