import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Sidebar from '../sidebar';
import Adminbar from "../adminbar";
import Email from '../email';
import { sendMail } from "../../helpers/crudFunctions";
import "../../scss/dashboard.scss";
import ApexChart from './apexchart';
import Notify from './notify';
import SubjectCard from './subjectCards';
import Propabilities from './propabities';
import Chart from './chart';
import Block1 from './block1';
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
                            subjects={this.props.subjects} />
                        <div className="row g-4 mb-4">
                            <Chart
                                volunteers={this.props.volunteers}
                                students={this.props.students}
                                sessions={this.props.sessions} />
                            <Block1 />
                        </div>


                        {/* <div className="col-12">
                            <div className="audio-player bg-light p-3">
                                <audio id="player" controls>
                                    <source src="/src/assets/6_tips_to_manage_your_time_and_do_more.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                        </div> */}
                        {/* <video controls>
                            <source src='/src/assets/كم التكلفة الحقيقية لمشروع الدروب شبينغ؟  عبدالله الفوزان 720 x 1280.mp4' />
                        </video> */}
                        {/* <Notify />
                        <ApexChart
                            volunteers={this.props.volunteers}
                            students={this.props.students}
                        /> */}

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

{/* <div className="msg">
    <Email
        sendMail={this.sendMail}
    />
</div > */}