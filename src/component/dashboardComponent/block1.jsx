import React, { Component } from 'react';

class Block1 extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="col-xxl-4">
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
                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="src/assets/img/Adobe Photoshop CC.svg" alt="avatar" />
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
                                    <div className="avatar avatar-md flex-shrink-0">
                                        <div className="avatar-img rounded-circle bg-purple bg-opacity-10">
                                            <span className="text-purple position-absolute top-50 start-50 translate-middle fw-bold">DB</span>
                                        </div>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
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
                                    <div className="avatar avatar-md flex-shrink-0">
                                        <div className="avatar-img rounded-circle bg-orange bg-opacity-10">
                                            <span className="text-orange position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                        </div>
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
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
                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="" alt="avatar" />
                                    </div>
                                    {/* <!-- Info --> */}
                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                                        <p className="mb-0">Thanks for contact us with your issues.</p>
                                        <span className="small">9 hour ago</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ticket item END --> */}
                        </div>
                        {/* <!-- Card body END --> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Block1;