import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand" >
                    <Link to="/" className="navbar-brand">To Do List</Link>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page">
                                <Link to="/" className="nav-link active">Home</Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                <Link to="/view" className="nav-link">View</Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" >
                                <Link to="/create" className="nav-link">Create</Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
