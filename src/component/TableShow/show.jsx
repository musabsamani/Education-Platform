import React,{ Component } from "react";
import { Link } from "react-router-dom";

class Show extends Component {

    render() {
                
        return (
            <>
                <div className="container mt-5 ">
                    <h2>Voulunteer Information</h2>
                    
                    <h2>{this.props.vol.name}</h2>
                    <h2>{this.props.vol.age}</h2>
                    <h2>{this.props.vol.email}</h2>
                    <h2>{this.props.vol.address}</h2>
                    <h2>{this.props.vol.phone}</h2>

                    <div className="col mt-2">
                        <Link to="/classes"><button className="btn btn-success m-1">Back</button></Link>
                    </div>
                </div>
            </>
        );
    }
}
export default Show;