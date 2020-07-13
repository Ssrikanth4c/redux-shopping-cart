import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {addToOrders, increment, decrement} from "../redux/action";
import './fontAwesome/fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            mobile:'',
            address:''
        }
    }
    componentDidMount(){
        console.log(this.props.data)
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        addToOrders([...this.state, ...this.props.data])
        console.log(this.state)
    }
    render(){
        const {data,increment, decrement}= this.props
        return(
            <div className='container'>
                {/* Display cart items */}
                <table className="table table-striped table-dark">
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
                        {data?.map((item,ind)=>{
                            return(

                                <tr key={ind}>
                                    <td>{ind+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <img src={item.img} alt={item.name} height='100px' width='100px'/>
                                    </td>
                                    <td className='d-flex'>
                                        <div className='flex-1' onClick={()=> increment(item.id)}>
                                            <FontAwesomeIcon icon="plus-circle" size='2x' className= "text-danger"/>
                                        </div>
                                        <div className='flex-1 h3'>
                                            {item.qty}
                                        </div>
                                        <div className='flex-1' onClick={()=>decrement(item.id)}>
                                            <FontAwesomeIcon icon='minus-circle' size='2x' className="text-danger" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}    
                    </tbody>
                </table>
                {/* ask user details for order items */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="Name">Name</label>
                            <input type="text" className="form-control text-center" name='name' placeholder='Name' autoComplete='off' onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="Address">Address</label>
                            <input type="text" className="form-control text-center" name='address'placeholder='Address' autoComplete='off' onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="mobile">Mobile No</label>
                            <input type="text" className="form-control text-center" name="mobile" placeholder='Mobile Number' autoComplete='off' onChange={this.handleChange}/>
                        </div>
                    </div>
                    <Link to='/order'>
                        <button type="submit" className="btn btn-outline-success">Add To Orders</button>
                    </Link>
                </form>
            </div>
        )
    }
  
}


const mapStateToProps=state=>{
    return {
        data:state.cartArray,
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