import React from "react";
import { Link } from "react-router-dom"; 
import "../componentCSS/notRegistered.css";

function NotRegistered() {
    return <div className="container not-registerd-container">
        <h2> Oops , Seems like you are not Logged In....... </h2>
        <div className="not-registered-go-to-home-saying-container">
      
            <Link to="/" className="btn btn-outline-primary">Login or Sign up</Link>
    

        </div>
    </div>;
}


export default NotRegistered;