import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './OrderSuccess.css';
const OrderSuccess = () => {
    const { user } = useAuth();
    return (
        <div className="order-success">
            <Container>
                <Row>
                    <Col>
                        <Card className="mt-5">
                            <Card.Body className="text-start text-center">
                                <i className="far fa-check-circle"></i>
                                <h3 className="text-success ">Dear <span className="text-primary">{user.displayName}</span> Your order process successfully completed.</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderSuccess;