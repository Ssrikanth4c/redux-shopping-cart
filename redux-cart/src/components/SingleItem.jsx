import React from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class SingleItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isAuth:false
        }
    }
    componentDidUpdate(){
        console.log('local auth')
        console.log(this.state.isAuth)
    }
    toggleAuth=()=>{
        alert('user not logged In');
        if(!this.props.isAuth){
                this.setState(
                    {
                        isAuth:!this.state.isAuth
                    }
                )
            }
        } 
    render(){
        const {data, isAuth, addToCart}=this.props
        if(this.state.isAuth){
            return <Redirect to='/login'/>
        }    
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Image</th>
                            {addToCart?'': <th scope="col">Qty</th>}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" ><Link to={`/products/${data.id}`}>{data.id}</Link></th>
                            <td><Link to={`/products/${data.id}`}>{data.name}</Link></td>
                            <td>{data.price}</td>
                            <td>{data.category}</td>
                            <td><Link to={`/products/${data.id}`}>
                                    <img src={data.img} alt={data.name} width="100" height="100" />
                                </Link>
                            </td>
                            {
                                addToCart ?
                                            <td>
                                                <button 
                                                    onClick={
                                                        ()=> {
                                                            return(
                                                                isAuth?
                                                                addToCart(data.id):this.toggleAuth()
                                                            )
                                                        }
                                                    }    
                                                    className="btn btn-outline-secondary"
                                                >
                                                    Add to Cart
                                                </button>
                                                </td>
                                :<td>{data.qty}</td>
                            }
                                {/* <td>{data.qty}</td> */}
                            </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
