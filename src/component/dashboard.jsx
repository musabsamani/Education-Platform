import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Chart from './chart';
import "../scss/dashboard.scss"
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from './show/profile';
import VolunteerTable from './show/volunteerTable';

const Dashboard = () => {

    return ( 
        <div className='main'>
            <div className='sidebar'>
                <div className='top'>
                    <div className='logo'>Unlimited Learning</div>
                </div>
                <hr />
                <div className='center'>
                    <ul>
                        <p className="title">main</p>
                        <li>
                            <NavLink exact to ='/dashboard' activeClassName="active">
                                <DashboardIcon className='icon' /><span>Dashboard</span>
                            </NavLink>
                        </li>
                        <p className="title">users</p>
                        <li>
                            <NavLink to="/volunteerTable" activeClassName="active">
                                <PersonIcon className='icon' /><span>Volunteer</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/studentTable" activeClassName="active">
                                <PeopleIcon/><span>Student</span>
                            </NavLink>
                        </li>
                        <p className="title">education</p>
                        <li>
                            <NavLink to="/subjectTable" activeClassName="active">
                                <MenuBookIcon/><span>Subject</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/calendar" activeClassName="active">
                                <CalendarMonthIcon/><span>Calendar</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div className="bottom">
                    <p className="title">settings</p>
                    <ul>
                        <li>
                            <NavLink to='/profile'>
                                <AccountBoxIcon /><span>profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>
                                <LogoutIcon /><span>logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='content'>
                <div className="top">
                    <div className="searchpart">
                        <input type="search" placeholder='search...' /><SearchIcon/>
                    </div>
                    <div className="icons">
                        <SettingsIcon/>
                        <EmailIcon/>
                        <ChatIcon/>
                        <div className='userphoto'>
                            <img src="https://cdn.pixabay.com/photo/2021/08/11/16/06/mountain-6538890_960_720.jpg" alt='user'/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="center">
                    <Routes>
                        <Route exact path='/dashboard' element={<VolunteerTable/>} />
                        {/* <Route exact path='/dashboard/studentTable' element={<StudentTable/>} /> */}
                    </Routes>
                </div>  
                <div className="bottom">

                </div>  
            </div>
        </div>
     );
}
 
export default Dashboard;