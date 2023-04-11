import React, { Component } from 'react';

class Block1 extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="col-xxl-4 ">
                    <div className="card shadow h-100">
                        {/* <!-- Card header --> */}
                        <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                            <h5 className="card-header-title">Volunteers Requests</h5>
                            {/* <a href="#" className="btn btn-link p-0 mb-0">View all</a> */}
                        </div>

                        {/* <!-- Card body START --> */}
                        <div className="card-body p-4">

                            {/* <!-- Ticket item START --> */}
                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">
                                    {/* <!-- Avatar --> */}
                                    <div className="">
                                        <picture>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" width='50px' alt="Avatar" />
                                        </picture>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                                        <p className="mb-0">New ticket #759 from Lori Stevens for General Enquiry</p>
                                        <span className="small">8 hour ago</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ticket item END --> */}

                            {/* <!-- Divider --> */}
                            <hr />
                            {/* <!-- Ticket item START --> */}
                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">
                                    {/* <!-- Avatar --> */}
                                    <div className="">
                                        <picture>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" width='50px' alt="Avatar" />
                                        </picture>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="#" className="stretched-link">David Korria</a></h6>
                                        <p className="mb-0">Comment from Billy Vasquez on ticket #659</p>
                                        <span className="small">8 hour ago</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ticket item END --> */}

                            {/* <!-- Divider --> */}
                            <hr />

                            {/* <!-- Ticket item START --> */}
                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">
                                    {/* <!-- Avatar --> */}
                                    <div className="">
                                        <picture>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle" width='50px' alt="Avatar" />
                                        </picture>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="#" className="stretched-link">Alonso Dekhia</a></h6>
                                        <p className="mb-0"><b>Webestica</b> assign you a new ticket for <b>Eduport theme</b></p>
                                        <span className="small">5 hour ago</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ticket item END --> */}

                            {/* <!-- Divider --> */}
                            <hr />

                            {/* <!-- Ticket item START --> */}
                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">
                                    {/* <!-- Avatar --> */}
                                    <div className="">
                                        <picture>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-circle" width='50px' alt="Avatar" />
                                        </picture>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="#" className="stretched-link">Angolo Konte</a></h6>
                                        <p className="mb-0">Thanks for contact us with your issues.</p>
                                        <span className="small">9 hour ago</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ticket item END --> */}
                        </div>
                        {/* <!-- Card body END --> */}
                    </div>
                </div >
            </>
        );
    }
}

export default Block1;