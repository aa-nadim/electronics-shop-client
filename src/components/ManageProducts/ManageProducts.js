import React, { useEffect, useState } from 'react';
import ControlProducts from './ControlProducts';

const ManageProducts = () => {
    const [controlProducts, setControlProducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-refuge-18534.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setControlProducts(data))
    }, [])
    return (
        <div>
            {
                controlProducts.map(controlProduct => <ControlProducts controlProduct={controlProduct}></ControlProducts>)
            }
        </div>
    );
};

export default ManageProducts;