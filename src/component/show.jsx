import React from "react";
import { Link } from "react-router-dom";

const Show=(user)=> {
    console.log("here", user);
    // const u = user;
    return (
        <>
                <div className="container mt-5 ">
                <h2>Voulunteer Information</h2>
                <form className="col g-3">
                    <h1>hello</h1>
                        <div className="col mt-2">
                            <Link to="/classes"><button className="btn btn-success m-1">Back</button></Link>
                        </div>
                </form>
              </div>
        </>
    );
}
export default Show;