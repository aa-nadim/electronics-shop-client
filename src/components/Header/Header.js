import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <nav className="d-flex justify-content-between">
                <h1 className="text-white font-weight-bold">Electronics Shop</h1>
                <div className="navbar navbar-expand-lg justify-content-end">
                    <Link to="/" className="font-weight-bold">Home</Link>
                    <Link to="/addProducts" className="font-weight-bold">Add Product</Link>
                    <Link to="/manageProducts" className="font-weight-bold">Manage Products</Link>
                    <Link to="/orders" className="font-weight-bold">Orders</Link>
                    <button onClick={()=> setLoggedInUser({})} className="font-weight-bold btn btn-success">Sign out</button>
                    {/* <h3>email: {loggedInUser.email}</h3> */}
                </div>
            </nav>
            
        </div>
    );
};

export default Header ;