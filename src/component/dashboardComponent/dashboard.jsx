import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Sidebar from '../sidebar';
import Adminbar from "../adminbar";
import Email from '../email';
import { sendMail } from "../../helpers/crudFunctions";
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css'
import "../../scss/dashboard.scss";
import Chart from './chart';






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
                    <div className='content_area'>
                        <h1>hello</h1>
                        <div className='video'>
                            <div className="msg">
                                <Email
                                    sendMail={this.sendMail}
                                />
                            </div >
                            {/* <Chart /> */}

                        </div>
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
                        // <div className="video-player">
                        //     <div id="player-youtube" data-plyr-provider="youtube" data-plyr-embed-id="Uh9643c2P6k"></div>
                        // </div>