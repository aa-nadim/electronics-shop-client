import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Checkout = () => {
    const {ProductId} = useParams();
    const [productData, setProductData] = useState({});
    useEffect(() => {
        const url = `https://calm-refuge-18534.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let x;
            for(let i=0;i<data.length;i++){
                if(data[i]._id === ProductId){
                    x=i;break;
                }
            }
            setProductData(data[x])
        })
    }, [])
    const history = useHistory()
    const handleShipment = () =>{
        history.push(`/shipment/${ProductId}`);
    }
    return (
        <div>
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{ProductId}</td>
                <td>{productData.name}</td>
                <th scope="row">1</th>
                <td>{productData.price}</td>
                </tr>
                <tr>
                <td>Total</td>
                <td></td>
                <th scope="row"></th>
                <td>{productData.price}</td>
                </tr>
            </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary" onClick={handleShipment}>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;