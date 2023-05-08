// EmployeeTable.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EmployeeTable.css"; // Import CSS file for styling
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const EmployeeTable = () => {
    // Define state for employee
    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    // Function to fetch all employees
    const getAllEmployees = () => {
        // Replace with your API endpoint
        axios
            .get("http://localhost:4000/covid-vaccination/api/v1/employee")
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
            });
    };

    // Function to delete an employee by id
    const deleteEmployeeById = (id) => {
        // Replace with your API endpoint
        axios
            .delete(
                `http://localhost:4000/covid-vaccination/api/v1/employee/${id}`
            )
            .then((response) => {
                // Remove deleted employee from state
                setEmployees(
                    employees.filter((employee) => employee.id !== id)
                );
            })
            .catch((error) => {
                console.error(`Error deleting employee with id ${id}:`, error);
            });
    };

    // Fetch all employees on component mount
    useEffect(() => {
        getAllEmployees();
    }, []);

    return (
        <>
            <Header />
            <div
                style={{
                    maxWidth: "80%",
                    margin: "auto",
                    borderRadius: "10px"
                }}
            >
                <h1 className="table-title">Home</h1>
                <button
                    className="add-button"
                    onClick={() => {
                        navigate("/addForm");
                    }}
                >
                    ➕ Add
                </button>
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button
                                        className="edit-button"
                                        onClick={() =>
                                            console.log(
                                                `Edit employee with id ${employee.id}`
                                            )
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            deleteEmployeeById(employee.id)
                                        }
                                    >
                                        ❌
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default EmployeeTable;
