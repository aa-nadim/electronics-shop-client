import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import CircularProgress from '@material-ui/core/CircularProgress';


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-refuge-18534.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setLoading(false)
        })
    }, [])
    return (
        <div className="row" style={{backgroundColor: 'gray'}}>
            {
                loading ? <CircularProgress/> :
                    products.map(product => <Products product={product}></Products>)
            }
        </div>
    );
};

export default Home;