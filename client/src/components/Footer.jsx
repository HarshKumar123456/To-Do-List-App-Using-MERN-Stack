import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link href="/" className="nav-link px-2 text-body-secondary">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/view" className="nav-link px-2 text-body-secondary">
                        View
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/create" className="nav-link px-2 text-body-secondary">
                        Create
                    </Link>
                </li>
            </ul>
            <p className="text-center text-body-secondary">Copyright © {new Date().getFullYear()}</p>
        </footer>
    </div>;
}

export default Footer;