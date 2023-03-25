import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Chart from './chart';
import "../scss/dashboard.scss"
import Profile from './show/profile';
import VolunteerTable from './show/volunteerTable';
import Sidebar from './sidebar';
import Adminbar from "./adminbar";


// console.log(this.props.volunteers)
class Dashboard extends Component {
    state = {  } 
    render() { 
        return ( 
            <div className='main'>
                <Sidebar/>
                <div className='content'>
                    <Adminbar/>
                    <hr />
                    <div className="center">
                        <Route path='/component/show/volunteerTable.jsx' element={<VolunteerTable/>} />
                    </div>  
                    <div className="bottom">
    
                    </div>  
                </div>
            </div>
         );
    }
}
 
export default Dashboard;