import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
       
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [roles,setroles] = useState('');

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingEmpData = JSON.parse(localStorage.getItem('Emp')) || [];

        const newEmp = {
            eid: uniqueId,
            ename: name,
            eage: age,
            eroles: roles,
        };
    
        existingEmpData.push(newEmp);
        
        localStorage.setItem('Emp', JSON.stringify(existingEmpData));
        history("/");
    }

    return (
        <div className='container69'>
            <Form className='d-grid gap' style={{ margin: "4rem" }}>
                <h1 className='text-center display-4'>Add Employee Data</h1>
                <br></br><br></br>
                
               <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Name:' required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Control type='text' placeholder='Enter Age:' required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formSalary'>
                    <Form.Control type='text' placeholder='Enter Position:' required onChange={(e) => setroles(e.target.value)}>
                    </Form.Control>
                </Form.Group>
               <center><Button type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button></center>
            </Form>
        </div>
        
    )
}
export default Add;
