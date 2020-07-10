import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {addToOrders, increment, decrement} from "../redux/action";

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
        const {data,addToOrders,increment, decrement}=this.props
        return (
            <div className="container">
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <label>Address: </label>
                    <input type="text" name="address" onChange={this.handleChange} />
                    <Link to='/order'>
                        <button onClick={()=>addToOrders({name:this.state.name, 
                        address:this.state.address,
                        data:data})} className="btn btn-outline-warning">Add To Orders</button>
                    </Link>
                </div>
                {
                    data && data.map((ele,index)=>{
                        return(
                            // <SingleItem key={index} data={ele} />
                            <div>
                                <table  key={index}className="table table-striped table-dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Qty</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr key={index}>
                                        <th scope="row" >{ele.id}</th>
                                        <td>{ele.name}</td>
                                        <td>{ele.price}</td>
                                        <td>{ele.category}</td>
                                        <td><img src={ele.img} alt={ele.name} width="100" height="100" /></td>
                                        <td>
                                            <button onClick={()=>increment(ele.id)} >+</button><br/>
                                            {ele.qty}<br/>
                                            <button onClick={()=>decrement(ele.id)}>-</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
        </div>
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
        addToOrders:(payload)=>dispatch(addToOrders(payload)),
        increment:(payload)=>dispatch(increment(payload)),
        decrement:(payload)=>dispatch(decrement(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);