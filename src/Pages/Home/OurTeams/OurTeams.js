import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './OurTeams.css';
const OurTeams = () => {
    return (
        <div className="our-team">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <h1 className="text-white" style={{ zIndex: 10 }}>7 Wonders Of The World!!</h1>
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/VpLMgFS/Background.png" />
                                <Card.Body>
                                    <Card.Title>1. Ha Long Bay</Card.Title>
                                    <Card.Text>
                                          Vietnam
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/C1hScj0/Background-1.png" />
                                <Card.Body>
                                    <Card.Title>2. The Colosseum</Card.Title>
                                    <Card.Text>
                                        Italy
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/3krXm8F/Background-2.png" />
                                <Card.Body>
                                    <Card.Title>3. The Amazon</Card.Title>
                                    <Card.Text>
                                       South America
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/4MFK9fK/Background-3.png" />
                                <Card.Body>
                                    <Card.Title>4. The pyramids of Giza</Card.Title>
                                    <Card.Text>
                                    Egypt
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/R0d6cCD/Background-4.png" />
                                <Card.Body>
                                    <Card.Title> 5. Taj Mahal</Card.Title>
                                    <Card.Text>
                                          India 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/4pK5QKP/Background-5.png" />
                                <Card.Body>
                                    <Card.Title> 6. Angkor Wat </Card.Title>
                                    <Card.Text>
                                        Cambodia
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/HB4drjc/Background-6.png" />
                                <Card.Body>
                                    <Card.Title> 7. Grand Canyon </Card.Title>
                                    <Card.Text>
                                      USA 
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


