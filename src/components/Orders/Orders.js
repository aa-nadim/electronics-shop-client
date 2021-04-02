import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://calm-refuge-18534.herokuapp.com/orderDetails`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrders(data)
        })

    }, [])
    return (
        <div className="card text-white bg-success mb-3" style={{textAlign:'center'}}>
          <div className="card-header"><h1>There are {orders.length} orders</h1></div>
          <div className="card-body" >
            {
                orders.map(order => <div>
                    <div style={{border:'1px solid blue'}}>
                        <h3>Name : {order.name}</h3>  
                        <h3>Product Name : {order.products.name}</h3>
                        <h3>Order Date : {(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</h3>
                    </div>
                </div>)
            }
          </div>
        </div>
    );
};

export default Orders;