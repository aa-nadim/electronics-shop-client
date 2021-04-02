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
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                controlProducts.map(controlProduct =>  <ControlProducts controlProduct={controlProduct}></ControlProducts>)
            }
            </tbody>
        </table>
    );
};

export default ManageProducts;