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
            <div>
                <p>This is Product Detail Component : {ProductId}</p>
                <h3>Name: {productData.name}</h3>
                <p>Price: {productData.price}</p>
                <button onClick={handleShipment}>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;