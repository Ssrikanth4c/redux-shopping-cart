import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {addToOrders, increment, decrement} from "../redux/action";
// import './fontAwesome/fontAwesome';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            mobile:'',
            address:''
        }
    }
    render(){
        return(
            <div className='container'>
                {/* Display cart items */}
                        
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