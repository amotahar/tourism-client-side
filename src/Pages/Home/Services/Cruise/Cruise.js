import React from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cruise = (props) => {
    const { _id, title, price, img_url, days, departure, date } = props.cruise;
    const { handelBookSystem, bookLoading } = props;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                    <Row>
                        <Col md={6} className="text-start">
                            <div>
                                <p className="m-0"> <b>{title}</b></p>
                                <small>{days} NIGHTS</small>
                            </div>
                        </Col>
                        <Col md={6} className="text-end">
                            <p className="m-0"><small>Price</small></p>
                            <small className="text-success"><b>${price}</b></small>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6} className="text-start">
                            <div>
                                <p className="m-0"> <i className="far fa-clock"></i> <small>DATE</small></p>
                                <small>{date}</small>
                            </div>
                        </Col>
                        <Col md={6} className="text-end">
                            <p className="m-0"> <i className="fas fa-map-marker-alt"></i><small> Departure</small></p>
                            <small >{departure}</small>
                        </Col>
                    </Row>
                    <div className="text-end mt-3">
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

export default Cruise;