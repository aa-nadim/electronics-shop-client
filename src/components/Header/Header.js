import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <h1>Electronics Shop</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/addProducts">Add Product</Link>
                <Link to="/manageProducts">Manage Products</Link>
                <Link to="/orders">Orders</Link>
                <button onClick={()=> setLoggedInUser({})}>Sign out</button>
                {/* <h3>email: {loggedInUser.email}</h3> */}
            </nav>
        </div>
    );
};

export default Header ;