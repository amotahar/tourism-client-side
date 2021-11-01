import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import OurService from './OurService/OurService';

const OurServices = () => {

    const [serviceTypes, setserviceTypes] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);

    useEffect(() => {
        fetch(` https://grisly-fangs-89831.herokuapp.com/service_types`)
            .then(res => res.json())
            .then(data => {
                setserviceTypes(data);
                setIsLodaing(false);
            })
    }, []);
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />;
    }
    return (
        <div className="our-services mt-3">
            <Container>
                <h3 className="text-start mb-3">Our Service Items <i className="fas fa-cog"></i></h3>
                <Row xs={1} md={3} className="g-4">
                    {
                        serviceTypes.map(type => <OurService key={type._id} type={type}></OurService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;