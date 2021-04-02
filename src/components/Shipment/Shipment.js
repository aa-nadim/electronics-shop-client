import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const {ProductId} = useParams();
    console.log(ProductId);
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

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const orderDetails = {
            ...loggedInUser, 
            shipment : data, 
            products : productData,
            orderTime: new Date()
        };
        fetch('https://calm-refuge-18534.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
          })
            .then(res => res.json())
            .then(data => {
              if (data) {
                // processOrder();
                alert('your order placed successfully,  please  check your Order Page.....');
              }
            })
        }
    return (
        <div className="card text-white bg-success mb-3" style={{textAlign:'center'}}>
          <div className="card-header"><h1>Please give your address for shipment</h1></div>
          <div className="card-body" >
            <form onSubmit={handleSubmit(onSubmit)} className="ship-form">
        
              <input name="name" defaultValue={loggedInUser.name}  ref={register({ required: true })} placeholder="Your Name" />
              {errors.name && <span className="error">Name is required</span>}

              <input name="email" defaultValue={loggedInUser.email}  ref={register({ required: true })} placeholder="Your Email" />
              {errors.email && <span className="error">Email is required</span>}

              <input name="address" ref={register({ required: true })} placeholder="Your Address" />
              {errors.address && <span className="error">Address is required</span>}

              <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
              {errors.phone && <span className="error">Phone Number is required</span>}

              <input className="btn btn-secondary" type="submit" />
            </form>
          </div>
        </div>
    );
};

export default Shipment;