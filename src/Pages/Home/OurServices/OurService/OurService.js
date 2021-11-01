import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import './OurService.css';
const OurService = (props) => {
    const { img, title } = props.type;
    return (
        <Col>
            <Card className="bg-dark text-white">
                <Card.Img src={img} />
                <Card.ImgOverlay>
                    <Card.Title className="text-start">
                        <span className="service-title">{title}</span>
                    </Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default OurService;