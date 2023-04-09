import React from 'react';

function SubjectCard() {
    return (
        <>
            <div className="card card-metro overflow-hidden rounded-3">

                {/* <source srcset='/src/assets/img/Adobe Photoshop CC.svg' media='(min-width:300px)' /> */}
                <img src="/src/assets/img/Adobe Photoshop CC.svg" alt="logo" />
                {/* </picture> */}
                {/* <!-- Image overlay --> */}
                <div className="card-img-overlay d-flex flex-column">
                    {/* <!-- Info --> */}
                    <div className="mt-auto card-text">
                        <a href="#" className="text-light mt-auto fs-5 stretched-link">Digital marketing</a>
                        <div> <a href="#" className="text-white">23 Courses</a> </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubjectCard;