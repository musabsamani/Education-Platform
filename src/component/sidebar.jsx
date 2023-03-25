import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';

import "../scss/sidebar.scss"

const Sidebar = () => {
    return ( 
        <>
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
                                    <PersonIcon className='icon' /><span>Volunteers</span>
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
        </>
    );
}
 
export default Sidebar;