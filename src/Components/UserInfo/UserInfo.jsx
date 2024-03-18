import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "./UserInfo.css";

const UserInfo = () => {
    return (
        <div id="user-info-area">
            <div className="container">
                <div className="row">
                    <div className="user-page-heading">
                        <h2>User Profile</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="user-info">
                                <h5>User Name:</h5>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="John Doe" />
                                </Form.Group>
                                <h5>User Designation:</h5>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="John Doe" />
                                </Form.Group>
                                <h5>User Password:</h5>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="John Doe" />
                                </Form.Group>
                                
                            <Button variant="success" size="lg" className='w-50'>
                            Create User
                            </Button>{' '}
                        </div>
                    </div>
                    <div className="col-md-6">
                                <h5>User Phone Number:</h5>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="John Doe" />
                                </Form.Group>
                                <h5>User Company:</h5>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="John Doe" />
                                </Form.Group>
                                <h5>User Address:</h5>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="John Doe" />
                                </Form.Group>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;