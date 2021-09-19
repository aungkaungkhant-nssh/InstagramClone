import React from 'react'
import { Input,Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Register.css"
function Register() {
    return (
        <div className="register">
        <Card>
            <div className="text-center p-3">
                <h3 className="application-title text-center mb-2">Instagram</h3>
                <form action="">
                   <div className="form-group">
                         <Input placeholder="Name" type="text" className="form__input"></Input>
                   </div>
                  <div className="form-group">
                         <Input placeholder="email" type="email" className="form__input"></Input>
                  </div>
                   <div className="form-group">
                         <Input placeholder="password" type="password" className="form__input"></Input>
                   </div>
                    <button className="btn btn-theme">Register</button>
                </form>
                <div className="register__button">
                    <Link to="/login">Have an Account? Login</Link>
                </div>
            </div>
        </Card>
     </div>
    )
}

export default Register
