import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './OurTeams.css';
const OurTeams = () => {
    return (
        <div className="our-team">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <h1 className="text-white" style={{ zIndex: 10 }}>Our Team</h1>
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/cJXHcP3/agent-3.jpg" />
                                <Card.Body>
                                    <Card.Title>Mikal clark</Card.Title>
                                    <Card.Text>
                                        CEO
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/HF5csHt/agent-4.jpg" />
                                <Card.Body>
                                    <Card.Title>Jhon Jha</Card.Title>
                                    <Card.Text>
                                        Flight Agent
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/kh45Bqx/agent-2.jpg" />
                                <Card.Body>
                                    <Card.Title>Eachann Jhon</Card.Title>
                                    <Card.Text>
                                        Hotel Agent
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/k20xrMc/agent-1.jpg" />
                                <Card.Body>
                                    <Card.Title>Jhimi</Card.Title>
                                    <Card.Text>
                                        Cruise Agent
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default OurTeams;