import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://calm-refuge-18534.herokuapp.com/orderDetails`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })

    }, [])
    return (
        <div>
            <h3>You have: {orders.length} orders</h3>
            {
                orders.map(order => <li>{order.name} from {(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Orders;