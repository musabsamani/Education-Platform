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
                    <Input type="text" name="name" label="Name" value={user.name} />
                    <Input type="text" name="specializaiton" label="Pro-Specialization" value={user.specializaiton} />
                    <Input type="text" name="subject" label="Subject" value={user.subject} />
                    <Input type="email" name="email" label="Email" value={user.email} />
                    <Input type="text" name="address" label="Address" value={user.address} />
                    <Input type="text" name="phone" label="Phone" value={user.phone} />
                    
                        <div className="col mt-2">
                            <Link to="/classes"><button className="btn btn-success m-1">Back</button></Link>
                        </div>
                </form>
              </div>
        </>
    );
}
export default Show;