import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Cruise from './Cruise/Cruise';
import Flight from './Flight/Flight';
import Hotel from './Hotel/Hotel';
import './Services.css';

const Services = () => {
    const { user } = useAuth();
    const [hotels, setHotels] = useState([]);
    const [flights, setFlights] = useState([]);
    const [cruises, setCruises] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);
    const [bookLoading, setBookLodaing] = useState(false);
    console.log(user.uid);
    useEffect(() => {
        fetch(" https://grisly-fangs-89831.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                // filter hotel type of service and set
                const newHotels = data.filter(service => service.type === 'hotel');
                setHotels(newHotels);

                // filter flight type of service and set
                const newFlights = data.filter(service => service.type === 'flight');
                setFlights(newFlights);

                // filter cruise type of service and set
                const newCruise = data.filter(service => service.type === 'cruise');
                setCruises(newCruise);
                setIsLodaing(false);
            });
    }, [])

    const handelBookSystem = (id) => {
        setBookLodaing(true);
        const booking = {
            serviceId: id,
            userId: user.uid,
        }
        fetch(" https://grisly-fangs-89831.herokuapp.com/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookLodaing(false);
                    alert("service successfully booked");
                }
            })
    }
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />;
    }
    return (
        <div className="services mt-5">
            <Container>
                <div className="hotel">
                    <h3 className="text-start mb-3">Hotels <i className="fas fa-hand-point-right"></i></h3>
                    <Row xs={1} md={3} className="g-4">
                        {
                            hotels.map(hotel => <Hotel key={hotel._id} bookLoading={bookLoading} handelBookSystem={handelBookSystem} hotel={hotel}></Hotel>)
                        }
                    </Row>
                </div>

                <div className="flight">
                    <h3 className="text-start mb-3 mt-3">Flights <i className="fas fa-hand-point-right"></i></h3>
                    <Row xs={1} md={3} className="g-4">
                        {
                            flights.map(flight => <Flight key={flight._id} bookLoading={bookLoading} handelBookSystem={handelBookSystem} flight={flight}></Flight>)
                        }
                    </Row>
                </div>
                <div className="cruise">
                    <h3 className="text-start mb-3 mt-3">Cruise <i className="fas fa-hand-point-right"></i></h3>
                    <Row xs={1} md={3} className="g-4">
                        {
                            cruises.map(cruise => <Cruise key={cruise._id} bookLoading={bookLoading} handelBookSystem={handelBookSystem} cruise={cruise}></Cruise>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;