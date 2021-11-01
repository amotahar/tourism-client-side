import React from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Flight.css';
const Flight = (props) => {
    const { _id, title, place, price, img_url } = props.flight;
    const {  bookLoading } = props;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                    <Row>
                        <Col md={6} className="text-start">
                            <i className="fas fa-fighter-jet"></i>
                            <div>
                                <p className="m-0"> <b>{title}</b></p>
                                <small>{place}</small>
                            </div>
                        </Col>
                        <Col md={6} className="text-end">
                            <p className="m-0"><small>Price</small></p>
                            <small className="text-success"><b>${price}</b></small>
                        </Col>
                    </Row>
                    <div className="text-end">
                        {
                            bookLoading ?
                                <Spinner animation="border" variant="danger" />
                                :

                                <Link to={`/service-order/${_id}`}>
                                    <button className="btn btn-warning tbn-sm">Book</button>
                                </Link>
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Flight;