import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const Products = ({product}) => {
    const history = useHistory()
    const handleProceedCheckOut = () =>{
        history.push(`/checkout/${product._id}`);
    }
    return (
        <div className="col-md-3">
            {/* style={{height: '300px'}} */}
           <div className="card mt-3" style={{width: '18rem',height: '400px'}}>
                <img className="card-img-top" style={{height: '300px'}} src={product.imageURL}  alt=""/>
                <div className="card-body d-flex justify-content-between">
                    <h3 className="card-title">{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={handleProceedCheckOut} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
