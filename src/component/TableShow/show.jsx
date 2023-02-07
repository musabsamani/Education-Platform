import React from "react";
import { Link } from "react-router-dom";

const Show=(table)=> {
    console.log("here", table);
    // const u = user;
    return (
        <>
                <div className="container mt-5 ">
                        <h2>Voulunteer Information</h2>
                            
                        <h2>{table.name}</h2>
                        <h2>{table.age}</h2>
                        <h2>{table.email}</h2>
                        <h2>{table.address}</h2>
                        <h2>{table.phone}</h2>
                        
                    <div className="col mt-2">
                        <Link to="/classes"><button className="btn btn-success m-1">Back</button></Link>
                    </div>
              </div>
        </>
    );
}
export default Show;