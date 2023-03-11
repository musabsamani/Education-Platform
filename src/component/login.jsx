import React, { Component } from 'react';
// import Input from './include/_input';
import '../scss/login.scss'
import { Link } from 'react-router-dom';
class Login extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="_container">
                    <div className="logincard">
                        <div className="image">
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                        </div>
                        <div className="loginform">
                            <form action="">
                                <input className='_input' type="text" placeholder='UserName'/>
                                <input className='_input' type="password" placeholder='Password'/>
                                <Link to='/dashboard'><button className='btn btn-primary '>login</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Login;