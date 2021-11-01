import React from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hotel = (props) => {
    const { _id, title, place, price, img_url } = props.hotel;
    const { bookLoading } = props;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                    <Row>
                        <Col md={7} className="text-start">
                            <p className="m-0"><b>{title}</b></p>
                            <small>{place}</small>
                        </Col>
                        <Col md={5} className="text-end">
                            <p className="m-0"><small>AVG/NIGHT</small></p>
                            <small className="text-success"><b>${price}</b></small>
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

export default Hotel;