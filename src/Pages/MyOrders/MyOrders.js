import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import './MyOrders.css';
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [orderProducts, setOrderProducts] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);

    useEffect(() => {
        const url = ` https://grisly-fangs-89831.herokuapp.com/my-orders/${user.uid}`;
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
            const url = ` https://grisly-fangs-89831.herokuapp.com/orders/${id}`;
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
                    <h3>Dear {user.displayName}, <span className="text-success">{orders.length}</span> items you have booked.</h3>

                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Service Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <MyOrder key={order._id} removeOrder={removeOrder} order={order}></MyOrder>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </Row>
        </Container>
    );
};

export default MyOrders;