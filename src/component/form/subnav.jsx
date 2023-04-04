import React from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link, NavLink } from 'react-router-dom';

import '../../scss/navbar.scss'

const Subnav = () => {
    return (
        <>
            <nav className="b navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><AutoStoriesIcon />Unlimited Learning</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">hello</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">

                            <li className="nav-item">
                                <NavLink to='/home'>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/dashboard'>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            </li>
                        </ul>
                        <form role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Subnav;