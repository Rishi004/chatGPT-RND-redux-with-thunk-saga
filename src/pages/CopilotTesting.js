import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CopilotTesting.css";

function CopilotTesting() {
    const [employee, setemployee] = useState([]);

    /**
     * Get all employees from the API
     * and set the employee state
     * @returns void
     * */
    function getAllEmployees() {
        axios
            .get("http://localhost:4000/covid-vaccination/api/v1/employee")
            .then((response) => {
                setemployee(response.data);
            });
    }

    /**
     * Delete an employee from the API
     * @param {number} id
     * @returns void
     * */
    function deleteEmployee(id) {
        axios
            .delete(
                `http://localhost:4000/covid-vaccination/api/v1/employee/${id}`
            )
            .then((response) => {
                console.log(response.data);
                getAllEmployees();
            });
    }

    useEffect(() => {
        getAllEmployees();
    }, []);

    return (
        <div>
            <Link className="add" to="/CopilotForm">
                Add
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="edit">Edit</button>
                                <button
                                    className="delete"
                                    onClick={() => deleteEmployee(employee.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CopilotTesting;
