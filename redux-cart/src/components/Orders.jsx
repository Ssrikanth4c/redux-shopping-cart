import React, { Component } from 'react';
import SingleItem from "./SingleItem";
import {connect} from "react-redux";

class Orders extends Component {
    componentDidMount(){
        console.log('ordddd')
        console.log(this.props)
    }
    render() {
        const {data}=this.props
        return (
            <div className='container'>
                {
                    data && data.map((ele,index)=>{
                        return(
                            <div key={index}>
                                <h1>{ele.name}</h1>
                                <h1>{ele.address}</h1>
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