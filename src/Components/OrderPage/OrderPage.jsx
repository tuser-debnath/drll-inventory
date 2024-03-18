import React from 'react';
import "./OrderPage.css";
import { Button, Form } from 'react-bootstrap';

const OrderPage = () => {
    return (
        <div id='order-page-area'>
            <div className="container">
                <div className="row">
                    <div className="order-page-heading">
                        <h2>Place an order</h2>
                    </div>
                </div>
                <div className="row">
                    <h3 className='mb-5'>Product Information</h3>
                        <div className="col-md-4">
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Serial No*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Serial No" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Delivery Date*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Delivery Date" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Quantity*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Quantity" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Product Description*</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Product Description"/>
                            </Form.Group>
                            <Button variant="success" size="lg" className='w-100'>
                            Place Your Order
                            </Button>{' '}
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Order No*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Order No" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Paper Size*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Paper Size" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Total Quantity*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Total Quantity" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Special Instruction*</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Special Instruction"/>
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Order Date*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Paper Type" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Paper Type*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Paper Type" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Core Size*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Core Size" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Remarks*</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Remarks"/>
                            </Form.Group>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;