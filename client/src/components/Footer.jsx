import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return <div className="container footer-container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link px-2 text-body-secondary">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/view"} className="nav-link px-2 text-body-secondary">
                        View
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/harsh-kumar-158634233/" className="nav-link px-2 text-body-secondary">
                        Developer's Contact
                    </a>
                </li>
            </ul>
            <p className="text-center text-body-secondary">Copyright © 2004-{new Date().getFullYear()}</p>
        </footer>
    </div>;
}

export default Footer;