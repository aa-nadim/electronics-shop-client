import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddProducts from "./components/AddProducts/AddProducts";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageProducts from "./components/ManageProducts/ManageProducts";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipment from "./components/Shipment/Shipment";

export const UserContext = createContext();


function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
    <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/addProducts">
            <AddProducts />
          </PrivateRoute>
          <PrivateRoute path="/manageProducts">
            <ManageProducts />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:ProductId">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/shipment/:ProductId">
            <Shipment />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}
export default App;

