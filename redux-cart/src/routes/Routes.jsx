import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Orders from "../components/Orders.jsx";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={()=><Home />} />
            <Route exact path="/cart" render={()=><Cart />} />
            <Route exact path="/product" render={()=><Products />} />
            <Route exact path="/order" render={()=><Orders />} />
        </Switch>
    )
}