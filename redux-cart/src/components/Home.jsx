import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleItem from "./SingleItem";
import {addToCart} from "../redux/action";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            option:e.target.value
        })
    }

    render() {
        const {data,addToCart,cartArray}=this.props
        return (
            <div className="container row">
                <div className="col">
                    <div className="dropdown">
                        <select onChange={this.handleChange} >
                            <option value="all">All</option>
                            <option value="digital">digital</option>
                            <option value="watches">watches</option>
                            <option value="clock">clock</option>
                        </select>
                    </div>
                    {
                        data && data.filter(item => {
                            if(item.category==this.state.option)
                                return true
                            if(this.state.option=="all" || this.state.option=='')
                                return true
                        }).map((ele,index)=>{
                            return(
                                <SingleItem key={index} data={ele} addToCart={addToCart} />
                            )
                        })
                    }
                </div>
                <div className="col">
                    {
                        cartArray && cartArray.map((ele,index)=>{
                            return(
                                <SingleItem key={index} data={ele} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps =state=>{
    return {
        data:state.data,
        cartArray:state.cartArray,
    }
}

const mapDispatchToProps =dispatch=>{
    return {
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)