import React from 'react';

const ControlProducts = ({controlProduct}) => {
    const deleteProduct = id => {
        console.log(id)
        fetch(`https://calm-refuge-18534.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            // console.log('deleted successfully',data)
            alert('This product is deleted. please check Home Page........');
        })
    }
    return (
                <tr>
                <td>{controlProduct.name}</td>
                <td>{controlProduct.price}</td>
                <td><button>edit</button></td>
                <td><button onClick={() => deleteProduct(controlProduct._id)}>Delete</button></td>
                </tr>
    );
};

export default ControlProducts;