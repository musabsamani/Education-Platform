import React from 'react';
import { Link } from 'react-router-dom';
import Chart from './chart';
import "../scss/sidebar.scss"
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

const Sidebar = () => {

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
                        <li><DashboardIcon className='icon' /><span>Dashboard</span></li>
                        <p className="title">users</p>
                        <Link to="/volunteerTable">
                            <li><PersonIcon className='icon' /><span>Volunteer</span></li>
                        </Link>
                        <Link to="/studentTable">
                            <li><PeopleIcon/><span>Student</span></li>
                        </Link>
                        <p className="title">education</p>
                        <Link to="/subjectTable">
                            <li><MenuBookIcon/><span>Subject</span></li>
                        </Link>
                        <Link to="/calendar">
                            <li><CalendarMonthIcon/><span>Calendar</span></li>
                        </Link>
                    </ul>
                </div>
                <hr/>
                <div className="bottom">
                    <p className="title">settings</p>
                    <ul>
                        <Link to='/profile'>
                            <li><AccountBoxIcon /><span>profile</span></li>
                        </Link>
                        <li><LogoutIcon /><span>logout</span></li>
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
                    <Chart/>
                </div>  
                <div className="bottom"></div>  
            </div>
        </div>
     );
}
 
export default Sidebar;