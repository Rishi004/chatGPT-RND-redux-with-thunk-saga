import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the Header.css file for styling

const Header = () => {
    return (
        <header className="header-container">
            <div>
                <img
                    src="https://seeklogo.com/images/S/sampath-bank-logo-660B6E8BC9-seeklogo.com.png"
                    alt="logo"
                    className="logo-img" // Add the logo-img class to the img element
                />
            </div>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                            Contact us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
