import React from 'react';

const ControlProducts = ({controlProduct}) => {
    const deleteProduct = id => {
        console.log(id)
        fetch(`https://calm-refuge-18534.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully',data)
        })
    }
    return (
        <div>
            <h3>{controlProduct.name}</h3>
            <p>{controlProduct.price}</p>
            <button>edit</button>
            <button onClick={() => deleteProduct(controlProduct._id)}>Delete</button>
        </div>
    );
};

export default ControlProducts;