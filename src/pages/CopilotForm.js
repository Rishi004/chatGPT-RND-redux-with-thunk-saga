import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/CopilotForm.css";
import axios from "axios";

function CopilotForm() {
    const navigate = useNavigate();
    const [employee, setemployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    const [msg, setmsg] = useState("");

    const handleOnChange = (e) => {
        setemployee({ ...employee, [e.target.name]: e.target.value });
    };

    /**
     * Add an employee to the API
     * @returns void
     **/
    const addEmployee = () => {
        axios
            .post(
                "http://localhost:4000/covid-vaccination/api/v1/employee",
                employee
            )
            .then((response) => {
                setmsg(response.data.message);
            });
    };

    return (
        <div className="form-container">
            <Link className="back" to="/">
                Back
            </Link>
            <form className="form">
                <label className="form-label">First Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="firstName"
                    onChange={(e) => handleOnChange(e)}
                />
                <label className="form-label">Last Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="lastName"
                    onChange={(e) => handleOnChange(e)}
                />
                <label className="form-label">Email</label>
                <input
                    className="form-input"
                    type="text"
                    name="email"
                    onChange={(e) => handleOnChange(e)}
                />
                <button
                    className="form-submit"
                    type="submit"
                    onClick={() => addEmployee()}
                >
                    Submit
                </button>
            </form>
            <h1>{msg}</h1>
        </div>
    );
}

export default CopilotForm;
