import React from 'react'
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Contact = () => {

    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        // Retrieve all the employee data from localStorage
        const allEmpData = JSON.parse(localStorage.getItem('Emp')) || [];

        // Update the state with the retrieved data
        setEmployeeData(allEmpData);
    }, []);

    const handleDelete = (eid) => {
        // Filter out the employee with the specified eid
        const updatedEmployeeData = employeeData.filter((employee) => employee.eid !== eid);
        
        // Update the state with the filtered data
        setEmployeeData(updatedEmployeeData);
    
        // Update the localStorage data with the filtered data
        localStorage.setItem('Emp', JSON.stringify(updatedEmployeeData));
    };

    // Function to generate the custom formatted ID (e.g., EMP-001)
    const formatEmployeeId = (eid) => {
        return `EMP-${String(eid).padStart(3, '0')}`; // Pads the id to have 3 digits, like EMP-001
    };

    return (
        <div>
            <div style={{ margin: "2rem", textAlign: "center" }}>
                <h1 className='display-4'>Add Employee's Details</h1><br></br>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Roles
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.map((employee) => (
                            <tr key={employee.eid}>
                                
                                <td>{formatEmployeeId(employee.eid)}</td> {/* Apply custom ID format */}
                                <td>{employee.ename}</td>
                                <td>{employee.eage}</td>
                                <td>{employee.eroles}</td>
                                <td>
                                    <Button className='btn-danger' onClick={() => handleDelete(employee.eid)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <br /><br />
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg">Add</Button>
                </Link>
            </div>
        </div>
    )
}

export default Contact;
