import React, { useRef, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './AddService.css';
const AddService = () => {
    const [serviceType, setServiceType] = useState('');
    const [isLoading, setIsLodaing] = useState(false);
    const handleTypeChange = (e) => {
        setServiceType(e.target.value);
    }
    const handelAddService = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const place = e.target.place.value;
        const price = e.target.price.value;
        const days = e.target.days.value;
        const departure = e.target.departure.value;
        const date = e.target.date.value;
        const img_url = e.target.img_url.value;

        if (!serviceType) {
            alert('The service type field is required!');
            return false;
        }
        if (!title) {
            alert('The title field is required!');
            return false;
        }
        if (!price) {
            alert('The price field is required!');
            return false;
        }
        if (!img_url) {
            alert('The image url field is required!');
            return false;
        }

        if (serviceType === 'hotel' || serviceType === 'flight') {
            if (!place) {
                alert('The place field is required!');
                return false;
            }
        }
        if (serviceType === 'cruise') {
            if (!days) {
                alert('The days field is required!');
                return false;
            }
            if (!departure) {
                alert('The departure field is required!');
                return false;
            }
            if (!date) {
                alert('The date field is required!');
                return false;
            }
        }
        setIsLodaing(true);
        const service = {
            type: serviceType,
            title: title,
            place: place,
            days: days,
            price: price,
            departure: departure,
            date: date,
            img_url: img_url,
        };
        fetch(" https://grisly-fangs-89831.herokuapp.com/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setIsLodaing(false);
                    alert("service successfully added");
                    e.target.reset();
                }
            })
    }
    return (
        <div className="add-service">
            <Container>
                <Row>
                    <Col md={6} className="m-auto">
                        <h3 className="mt-5">Add A New Service</h3>
                        <Card>
                            <Card.Body>
                                <form className="text-start" onSubmit={handelAddService}>
                                    <div className="form-group">
                                        <label htmlFor="service-type">Service Type</label>
                                        <select className="form-control" onChange={handleTypeChange} id="service-type" name="service-type">
                                            <option value="">Select Service Type</option>
                                            <option value="hotel">Hotel</option>
                                            <option value="flight">Flight</option>
                                            <option value="cruise">Cruise</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="img_url">Image Url</label>
                                        <input type="text" className="form-control" id="img_url" placeholder="Enter image url" name="img_url" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="place">Place</label>
                                        <input type="text" className="form-control" id="place" placeholder="Enter place" name="place" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" className="form-control" id="price" placeholder="Enter price" name="price" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="days">Days</label>
                                        <input type="number" className="form-control" id="days" placeholder="Enter days" name="days" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="departure">Departure</label>
                                        <input type="text" className="form-control" id="departure" placeholder="Enter departure" name="departure" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" className="form-control" id="date" placeholder="Enter date" name="date" />
                                    </div>
                                    <div className="mt-2 text-end">
                                        {
                                            isLoading ?
                                                <Spinner animation="border" variant="danger" />
                                                :
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                        }

                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddService;