import React from 'react';
import "./OrderDetails.css";
import { Form , Button} from 'react-bootstrap';

const OrderDetails = () => {
    return (
        <div id="order-details-area">
            <div className="container">
                <div className="row">
                    <div className="order-details-heading">
                        <h2>Order Details</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="order-details">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className='mb-4'>Serial No: </h5>
                                    <h5 className='mb-4'>Order No: </h5>
                                    <h5 className='mb-4'>Order Date: </h5>
                                    <h5 className='mb-4'>Delivery Date: </h5>
                                    <h5 className='mb-4'>Paper Size: </h5>
                                    <h5 className='mb-4'>Paper Type: </h5>
                                    <Form.Select aria-label="Default select example" className='w-50'>
                                        <option>Order Status</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Production Ready</option>
                                        <option value="3">Delivered</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-6">
                                    <h5 className='mb-4'>Quantity: </h5>
                                    <h5 className='mb-4'>Total Quantity: </h5>
                                    <h5 className='mb-4'>Core Size: </h5>
                                    <h5 className='mb-4'>Product Description: </h5>
                                    <h5 className='mb-4'>Special Instruction: </h5>
                                    <h5 className='mb-4'>Remarks: </h5>
                                    <Button variant="primary" type="submit" className="w-50">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;