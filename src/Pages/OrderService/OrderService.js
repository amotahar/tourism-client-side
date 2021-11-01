import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner,} from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const OrderService = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);
    const [bookingLoading, setBookLodaing] = useState(false);
    const history = useHistory();
    console.log(id);
    useEffect(() => {
        const url = ` https://grisly-fangs-89831.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setIsLodaing(false)
            });
    }, []);
    console.log(product);
    const handelBookingProcess = (e) => {
        e.preventDefault();
        setBookLodaing(true);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target.address.value;

        if (!name) {
            alert('The name field is required!');
            setBookLodaing(false);
            return false;
        }
        if (!email) {
            alert('The email field is required!');
            setBookLodaing(false);
            return false;
        }
        if (!address) {
            alert('The address field is required!');
            setBookLodaing(false);
            return false;
        }
        const order = {
            serviceId: id,
            userId: user.uid,
            name: name,
            email: email,
            address: address,
            status: 'Pending'
        };
        fetch(` https://grisly-fangs-89831.herokuapp.com/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookLodaing(false);
                    history.push('/order-success')
                }
            })
    }
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />;
    }
    return (
        <Container className="my-4">
            <Row>
                <Col md={7}>
                    <Card>
                        <Card.Img variant="top" src={product.img_url} />
                        <Card.Body>
                            {
                                product.type === 'hotel' ?
                                    <Row>
                                        <Col md={7} className="text-start">
                                            <p className="m-0"><b>{product.title}</b></p>
                                            <small>{product.place}</small>
                                        </Col>
                                        <Col md={5} className="text-end">
                                            <p className="m-0"><small>AVG/NIGHT</small></p>
                                            <small className="text-success"><b>${product.price}</b></small>
                                        </Col>
                                    </Row> : ''
                            }
                            {
                                product.type === 'flight' ?
                                    <Row>
                                        <Col md={6} className="text-start">
                                            <i className="fas fa-fighter-jet"></i>
                                            <div>
                                                <p className="m-0"> <b>{product.title}</b></p>
                                                <small>{product.place}</small>
                                            </div>
                                        </Col>
                                        <Col md={6} className="text-end">
                                            <p className="m-0"><small>Price</small></p>
                                            <small className="text-success"><b>${product.price}</b></small>
                                        </Col>
                                    </Row> : ''
                            }
                            {
                                product.type === 'cruise' ?
                                    <div>
                                        <Row>
                                            <Col md={6} className="text-start">
                                                <div>
                                                    <p className="m-0"> <b>{product.title}</b></p>
                                                    <small>{product.days} NIGHTS</small>
                                                </div>
                                            </Col>
                                            <Col md={6} className="text-end">
                                                <p className="m-0"><small>Price</small></p>
                                                <small className="text-success"><b>${product.price}</b></small>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col md={6} className="text-start">
                                                <div>
                                                    <p className="m-0"> <i className="far fa-clock"></i> <small>DATE</small></p>
                                                    <small>{product.date}</small>
                                                </div>
                                            </Col>
                                            <Col md={6} className="text-end">
                                                <p className="m-0"> <i className="fas fa-map-marker-alt"></i><small> Departure</small></p>
                                                <small >{product.departure}</small>
                                            </Col>
                                        </Row>
                                    </div> : ''
                            }

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card>
                        <Card.Body className="text-start">
                            <h3>Your Information</h3>
                            <form onSubmit={handelBookingProcess}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" className="form-control" name="name" id="name" defaultValue={user.displayName} placeholder="Enter full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" defaultValue={user.email} placeholder="Enter full email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <textarea className="form-control" id="address" name="address" placeholder="Enter address" col="3"></textarea>
                                </div>
                                <div className="mt-2 text-end">
                                    {
                                        bookingLoading ?
                                            <Spinner animation="border" variant="danger" />
                                            :
                                            <button type="submit" className="btn btn-primary">Place order</button>
                                    }

                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default OrderService;