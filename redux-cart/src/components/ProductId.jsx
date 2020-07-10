import React from 'react';
import SingleItem from './SingleItem';
import {connect} from 'react-redux'

const ProductId=(props)=>{
    let {id}= props.match.params
    let {data}= props
    let newData= data.find(item=>item.id === id)
    return(
        <div className='container'>
            <SingleItem data={newData} />
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        data: state.data
    }
}
export default connect(mapStateToProps, null) (ProductId);