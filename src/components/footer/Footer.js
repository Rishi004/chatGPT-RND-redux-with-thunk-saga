import React from "react";
import "./Footer.css"; // Import the Footer.css file for styling

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get current year
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="slogan">Banking made simple</div>
                <div className="contact-info">
                    <div className="contact-number">
                        Contact: +94 77-767-019
                    </div>
                    <div className="web-link">
                        <a
                            href="https://www.sampath.lk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sampath.lk
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                © {currentYear} Sampath. All rights reserved. | Privacy Policy |
                Terms of Service
            </div>
        </div>
    );
};

export default Footer;
