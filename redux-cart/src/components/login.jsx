import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {userValidation} from '../redux/action';
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.props)
        this.props.userValidation(this.state)
    }
    render(){
        const style={position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)'}
        if(this.props.isAuth){
            alert('user Logged successfully')
            return <Redirect to='/'/>
        }
        else
        return(

            <div style={style}>
                <form className='border m-2' onSubmit={this.handleSubmit}>
                    <div className="h1 text-center text-info">Login Page</div>
                    <div className="form-group text-center">
                        <div>
                            <label className='text-center' htmlFor="username">Users Name</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="text" 
                            name="username"
                            placeholder='Username'
                            autoComplete='off'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group text-center">
                        <div>
                            <label htmlFor="passwword">Password</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="password" 
                            name="password"
                            placeholder='Password'
                            autoComplete='off'
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className='mx-2 '>
                        <button type="submit" className='font-weight-bold btn btn-primary btn-block'>Login</button>
                    </div>
                </form>
            </div>
        ) 
    }
}

const maapStateToProps=state=>{
    return{
        isAuth: state.isAuth
    }
}

const mapDispatchProps=dispatch=>{
    return{
        userValidation: (payload)=> dispatch(userValidation(payload))
    }    
}
export default connect(maapStateToProps, mapDispatchProps)(Login)