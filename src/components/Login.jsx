import React from 'react'
import './Login.css'
import { Input,Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="login">
           <Card>
               <div className="text-center p-3">
                   <h3 className="application-title text-center mb-2">Instagram</h3>
                   <form action="">
                     <div className="form-group">
                            <Input placeholder="email" type="email" className="form__input"></Input>
                     </div>
                      <div className="form-group">
                            <Input placeholder="password" type="password" className="form__input"></Input>
                      </div>
                       <button className="btn btn-theme">Login</button>
                   </form>
                   <div className="login__forgotpassword">
                       <Link to="/register">Don't have an account? Sign Up</Link>
                       <Link to="/">Forgot password?</Link>
                   </div>
               </div>
           </Card>
        </div>
    )
}

export default Login
