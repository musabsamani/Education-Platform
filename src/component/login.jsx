import React, { Component } from 'react';
import Input from './include/_input';
import '../scss/login.scss'
import { Link } from 'react-router-dom';
class Login extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="container">
                    <div className="logincard">
                        <div className="image"></div>
                        <div className="loginform">
                            <form action="">
                                <Input type='text' name="username" label="UserName" />
                                <Input type='password' name="password" label="Password" />
                                <Link to='/sidebar'><button className='btn btn-primary'>login</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Login;