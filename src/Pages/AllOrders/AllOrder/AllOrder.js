import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllOrder = (props) => {
    const { _id, serviceId, status, userId, name, email, address } = props.order;
    const { removeOrder } = props;
    const [orderProduct, setOrderProduct] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);
    useEffect(() => {
        const url = ` https://grisly-fangs-89831.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderProduct(data);
                setIsLodaing(false);
            });
    }, []);
    const updateOrderStatus = (id) => {
        let updateStatus = '';
        if (status === 'Pending') {
            updateStatus = 'Accept';
        }
        if (status === 'Accept') {
            updateStatus = 'Pending';
        }
        const order = {
            status: updateStatus
        };
        const url = ` https://grisly-fangs-89831.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }, body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully updated');
                    window.location.reload();
                } else {
                    alert("Not updated");
                }
            })
    }
    let statusClass = '';
    if (status === 'Pending') {
        statusClass = 'btn btn-warning btn-sm'
    }
    if (status === 'Accept') {
        statusClass = 'btn btn-success btn-sm'
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
            <td>
                <button title="click here to update status" className={statusClass} onClick={() => updateOrderStatus(_id)}>{status}</button>
                <button title="click here to remove order" className="btn btn-danger btn-sm ms-2" onClick={() => removeOrder(_id)}>X</button>
            </td>
        </tr>
    );
};

export default AllOrder;