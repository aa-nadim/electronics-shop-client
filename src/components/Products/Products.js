import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const Products = ({product}) => {
    const history = useHistory()
    const handleProceedCheckOut = () =>{
        history.push(`/checkout/${product._id}`);
    }
    return (
        <div className="col-md-4">
            <img style={{height: '300px'}}  src={product.imageURL}  alt=""/>
            <h3>{product.name}</h3>
           <button onClick={handleProceedCheckOut}>Buy Now</button>
        </div>
    );
};

export default Products;
