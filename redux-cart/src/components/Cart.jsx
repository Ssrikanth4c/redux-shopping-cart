import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleItem from "./SingleItem";
import {addToOrders} from "../redux/action";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            address:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {data,addToOrders}=this.props
        return (
            <div className="container">
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <label>Address: </label>
                    <input type="text" name="address" onChange={this.handleChange} />
                    <button onClick={()=>addToOrders({name:this.state.name, 
                    address:this.state.address,
                    data:data})} className="btn btn-outline-warning">Add To Orders</button>
                </div>
                {
                    data && data.map((ele,index)=>{
                        return(
                            <SingleItem key={index} data={ele} />
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps=state=>{
    return {
        data:state.cartArray
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addToOrders:(payload)=>dispatch(addToOrders(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);