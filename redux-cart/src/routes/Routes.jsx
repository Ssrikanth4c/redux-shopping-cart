import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../components/Home";
import Login from '../components/login';
import Products from "../components/Products";
import Cart from "../components/Cart";
import Orders from "../components/Orders.jsx";
import ProductId from   '../components/ProductId';
import {connect} from "react-redux";

const NotFound=()=>{
    return <h1>404: Not Found</h1>
}

function Routes(props) {
    console.log(props.isAuth)
    let {isAuth}= props
    return (
        <Switch>
            <Route  exact path="/" render={()=><Home />}/>
            <Route  path="/cart" render={()=><Cart />} />
            <Route  path="/product" render={()=><Products />} />
            <Route  path="/order" render={()=><Orders />} />
            <Route  path='/login' render={()=><Login />} />
            <Route  exact path='/products/:id' render={(props)=><ProductId {...props} />}/>
            <Route  component={NotFound}/>
        </Switch>
    )
}

const mapStateToProps=state=>{
    return{

        isAuth:state.isAuth
    }
}
export default connect(mapStateToProps, null)(Routes)
