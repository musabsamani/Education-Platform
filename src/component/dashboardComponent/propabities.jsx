import React from 'react';

const Propabilities = (props) => {
    let volNo = 0
    props.volunteers.forEach(element => {
        volNo++;
    });
    let stuNo = 0
    props.students.forEach(element => {
        stuNo++;
    });
    let subNo = 0
    props.subjects.forEach(element => {
        subNo++;
    });
    let sessNo = 0
    props.sessions.forEach(element => {
        sessNo++;
    });
    return (
        <>
            <div className="row g-4 mb-4">
                {/* <!-- Counter item --> */}
                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-warning  p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <!-- Digit --> */}
                            <div>
                                <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1958" data-purecounter-delay="200" data-purecounter-duration="0">{volNo}</h2>
                                <span className="mb-0 h6 fw-light">Total Volunteers</span>
                            </div>
                            {/* <!-- Icon --> */}
                            <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fas fa-tv fa-fw"></i></div>
                        </div>
                    </div>
                </div>

                {/* <!-- Counter item --> */}
                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-purple p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <!-- Digit --> */}
                            <div>
                                <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1600" data-purecounter-delay="200" data-purecounter-duration="0">{stuNo}</h2>
                                <span className="mb-0 h6 fw-light">Total Students</span>
                            </div>
                            {/* <!-- Icon --> */}
                            <div className="icon-lg rounded-circle bg-purple text-white mb-0"><i className="fas fa-user-tie fa-fw"></i></div>
                        </div>
                    </div>
                </div>

                {/* <!-- Counter item --> */}
                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-primary bg-opacity-50 p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <!-- Digit --> */}
                            <div>
                                <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1235" data-purecounter-delay="200" data-purecounter-duration="0">{subNo}</h2>
                                <span className="mb-0 h6 fw-light">Total Subjects</span>
                            </div>
                            {/* <!-- Icon --> */}
                            <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fas fa-user-graduate fa-fw"></i></div>
                        </div>
                    </div>
                </div>

                {/* <!-- Counter item --> */}
                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-success bg-opacity-50 p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <!-- Digit --> */}
                            <div>
                                <div className="d-flex">
                                    <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="845" data-purecounter-delay="200" data-purecounter-duration="0">{sessNo}</h2>
                                </div>
                                <span className="mb-0 h6 fw-light">Compeleted Lessons</span>
                            </div>
                            {/* <!-- Icon --> */}
                            <div className="icon-lg rounded-circle bg-success text-white mb-0"><i className="bi bi-stopwatch-fill fa-fw"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Propabilities;

