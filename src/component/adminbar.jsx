import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import '../scss/adminbar.scss'
const Adminbar = () => {
    return ( 
        <>
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
        </>
    );
}
 
export default Adminbar;