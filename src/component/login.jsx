import React, { Component } from 'react';
import '../scss/login.scss'
import { Link } from 'react-router-dom';
class Login extends Component {
    state = {}
    render() {
        return (
            <>
                <section className="p-0 d-flex align-items-center position-relative overflow-hidden">

                    <div className="container-fluid">
                        <div className="row">
                            {/* <!-- left --> */}
                            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                                <div className="p-3 p-lg-5">
                                    {/* <!-- Title --> */}
                                    <div className="text-center">
                                        <h2 className="fw-bold">Welcome to Unlimited Learning Family</h2>
                                        <p className="mb-0 h6 fw-light">Let's Teach Something Today!</p>
                                    </div>
                                    {/* <!-- SVG Image --> */}
                                    <img src="src/assets/img/Formula-amico.svg" className="mt-5" alt="" />
                                </div>
                            </div>

                            {/* <!-- Right --> */}
                            <div className="col-12 col-lg-6 m-auto">
                                <div className="row my-5">
                                    <div className="col-sm-10 col-xl-8 m-auto">
                                        {/* <!-- Title --> */}
                                        <span className="mb-0 fs-1" height="100%">👋</span>
                                        <h1 className="fs-2">Login into Eduport!</h1>
                                        <p className="lead mb-4">Nice to see you! Please log in with your account.</p>

                                        {/* <!-- Form START --> */}
                                        <form>
                                            {/* <!-- Email --> */}
                                            <div className="mb-4">
                                                <label for="exampleInputEmail1" className="form-label">Email address *</label>
                                                <div className="input-group input-group-lg">
                                                    <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                                    <input type="email" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail" id="exampleInputEmail1" />
                                                </div>
                                            </div>
                                            {/* <!-- Password --> */}
                                            <div className="mb-4">
                                                <label for="inputPassword5" className="form-label">Password *</label>
                                                <div className="input-group input-group-lg">
                                                    <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                                    <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="password" id="inputPassword5" />
                                                </div>
                                                <div id="passwordHelpBlock" className="form-text">
                                                    Your password must be 8 characters at least
                                                </div>
                                            </div>
                                            {/* <!-- Check box --> */}
                                            <div className="mb-4 d-flex justify-content-between mb-4">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                                </div>
                                                <div className="text-primary-hover">
                                                    <a href="forgot-password.html" className="text-secondary">
                                                        <u>Forgot password?</u>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- Button --> */}
                                            <div className="align-items-center mt-0">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary mb-0" type="button"><Link to='/dashboard'>Login</Link></button>
                                                </div>
                                            </div>
                                        </form>
                                        {/* <!-- Form END --> */}

                                        {/* <!-- Sign up link --> */}
                                        <div className="mt-4 text-center">
                                            <span>Don't have an account? <a href="sign-up.html">Signup here</a></span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Row END --> */}
                            </div>
                        </div>
                        {/* <!-- Row END --> */}
                    </div>
                </section>
            </>
        );
    }
}

export default Login;





{/* <div className="_container">
    <div className="logincard">
        <div className="image">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div>
        <div className="loginform">
            <form action="">
                <input className='_input' type="text" placeholder='UserName' />
                <input className='_input' type="password" placeholder='Password' />
                <Link to='/dashboard'><button className='btn btn-primary '>login</button></Link>
            </form>
        </div>
    </div>
</div> */}