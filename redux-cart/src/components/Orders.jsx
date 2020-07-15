import React, { Component } from 'react';
import SingleItem from "./SingleItem";
import {connect} from "react-redux";

class Orders extends Component {
    componentDidMount(){
        console.log('orders')
        console.log(this.props.data)
    }
    render() {
        const {data}=this.props
        return (
            <div className='container'>
                {
                    data && data.map((ele,index)=>{
                        return(
                            <div key={index}>
				<div className='flex-d'>
                                	<div className='flex-1'><h1>{ele.name}</h1></div>
                                	<div className='flex-1'><h1>{ele.address}</h1></div>
					<div className='flex-1'><h1>{ele.mobile}</h1></div>
				</div>
                                {
                                    ele.data.map((item,ind)=>{
                                        return(
                                            <SingleItem key={ind} data={item} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps =state=>{
    return{
        data:state.orderArray
    }
}

export default connect(mapStateToProps,null)(Orders)
