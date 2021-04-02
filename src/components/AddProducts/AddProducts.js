import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);
    
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        console.log(productData)
        const url = `https://calm-refuge-18534.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response'))
    };
    const handleImageUpload = product => {
        // console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'e0e08b1632cee2f9e41cba48d2d513fe');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            setImageURL(response.data.data.url);
            // console.log(response.data.data.url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
            <div className="card text-white bg-success mb-3" style={{textAlign:'center'}}>
                <div className="card-header"><h1>Add Product</h1></div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>Product Name</h5>
                        <input name="name" defaultValue="New exciting Product" ref={register} />
                        <br/><br/>
                        <h5>Product Price</h5>
                        <input name="price"  ref={register} />
                        <br/><br/>
                        <h5>Add Product Photo</h5>
                        <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
                        <br/><br/>
                        <input className="btn btn-secondary" type="submit" />
                    </form>
                </div>
            </div>
    );
};

export default AddProducts;