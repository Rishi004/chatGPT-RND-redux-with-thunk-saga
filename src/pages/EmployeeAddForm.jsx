import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/EmployeeAddForm.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function EmployeeAddForm() {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:4000/covid-vaccination/api/v1/employee",
                employee
            )
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <>
            <Header />
            <h1 className="form-title">Add New Employee</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="id"
                        name="ID"
                        value={employee.id}
                        onChange={handleChange}
                        required
                        className="form-input"
                        hidden
                    />
                    <div className="form-field">
                        <label className="form-label" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="button-container">
                        <button type="submit" className="add-button">
                            Add Employee
                        </button>
                        <button
                            type="button"
                            className="back-button"
                            onClick={handleCancel}
                        >
                            ◀ Back
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default EmployeeAddForm;
