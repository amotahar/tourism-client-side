import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
const MyOrder = (props) => {
    const { _id, serviceId, status } = props.order;
    const { removeOrder } = props;
    const [orderProduct, setOrderProduct] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);
    useEffect(() => {
        const url = `https://grisly-fangs-89831.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderProduct(data);
                setIsLodaing(false);
            });
    }, []);
    let statusClass = '';
    if (status === 'Pending') {
        statusClass = 'text-warning'
    }
    if (status === 'Accept') {
        statusClass = 'text-success'
    }
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />;
    }
    return (
        <tr>
            <td>
                <img src={orderProduct.img_url} alt={orderProduct.title} style={{ width: '150px' }} />
            </td>
            <td>
                {orderProduct.title}
            </td>
            <td className="text-capitalize">
                {orderProduct.type}
            </td>
            <td>
                ${orderProduct.price}
            </td>
            <td className={statusClass}>
                {status}
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => removeOrder(_id)}>X</button>
            </td>
        </tr>
    );
};

export default MyOrder;