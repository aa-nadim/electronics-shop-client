import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-refuge-18534.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="row">
            {
                products.map(product => <Products product={product}></Products>)
            }
        </div>
    );
};

export default Home;