import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
//import useAuth from '../../Hooks/useAuth';
import AllOrder from './AllOrder/AllOrder';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);
    useEffect(() => {
        const url = `https://grisly-fangs-89831.herokuapp.com/all-orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLodaing(false);
            });
    }, []);

    const removeOrder = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete this item?');
        if (proceed) {
            const url = `https://grisly-fangs-89831.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('successfully deleted');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })
        }

    }
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />;
    }
    return (
        <Container>
            <Row>
                <div className="my-items my-5">
                    <h3><span className="text-success">{orders.length}</span> items users have booked.</h3>

                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Service Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <AllOrder key={order._id} removeOrder={removeOrder} order={order}></AllOrder>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default AllOrders;