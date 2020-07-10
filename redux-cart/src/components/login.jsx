import React from 'react'
import { Redirect } from 'react-router-dom'
const Login =()=>{
    return <div>
        <div 
            className="btn btn-primary"
            onClick={()=><Redirect to='/'/>}
        >
            login
        </div>
    </div>
}
export default Login