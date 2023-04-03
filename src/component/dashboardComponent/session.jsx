import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Adminbar from '../adminbar';
// import '../../scss/session.scss';


class Session extends Component {
    state = {}
    render() {
        return (
            <>
                < div className='main' >
                    <Sidebar />
                    <div className='content'>
                        <Adminbar />
                        <div className="center">
                            <h1>Hello</h1>
                        </div>
                    </div>
                </div >
            </>
        );
    }
}

export default Session;