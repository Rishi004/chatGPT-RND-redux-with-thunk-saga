import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/ContactUs.css";
import { RiCustomerService2Line, RiProfileLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";

const ContactUs = () => {
    return (
        <>
            <Header />
            <div className="contact-us-container">
                <h1 className="contact-us-title">Contact Us</h1>
                <div className="contact-us-grid">
                    <div className="contact-us-section">
                        <RiCustomerService2Line className="contact-us-icon" />
                        <h2 className="contact-us-section-title">BY PHONE</h2>
                        <div className="contact-us-section-content">
                            <p className="contact-us-section-description">
                                Local Number (inside <strong>Sri Lanka</strong>{" "}
                                🇱🇰) <br />
                                123-456-7890
                            </p>
                            <p className="contact-us-section-description">
                                International Number
                                <br />
                                +1 123-456-7890
                            </p>
                        </div>
                    </div>
                    <div className="contact-us-section">
                        <RiProfileLine className="contact-us-icon" />
                        <h2 className="contact-us-section-title">
                            START A NEW CASE
                        </h2>
                        <div className="contact-us-section-content">
                            <p className="contact-us-section-description">
                                Have you been wronged and need to file a new
                                case? Our experienced team is ready to assist
                                you every step of the way. Contact us now to get
                                started.
                            </p>
                            <button className="contact-us-section-button">
                                START HERE
                            </button>
                        </div>
                    </div>
                    <div className="contact-us-section">
                        <BsChatDots className="contact-us-icon" />
                        <h2 className="contact-us-section-title">LIVE CHAT</h2>
                        <div className="contact-us-section-content">
                            <p className="contact-us-section-description">
                                Need to file a new case or have a legal
                                question? Chat with one of our representatives
                                now for immediate assistance.
                            </p>
                            <button className="contact-us-section-button">
                                START CHAT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
