import React, { useState } from 'react'
import { Input,Card} from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Register.css"
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../firebase'
import { Stack } from '@mui/material';
import Alert from '@mui/material/Alert';

function Register() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [hasError,setHasError]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            updateProfile(auth.currentUser,{
                displayName:username
            })
            .then(()=>{
                setUsername("");
                setPassword("");
                setEmail("");
            })
            .catch((error)=>{
                setHasError(error.message);
            })
        })
        .catch((error)=>{
            setHasError(error.message);
        })
    }
    return (
        <div className="register">
        <Card>
            <div className="text-center p-3">
                <h3 className="application-title text-center mb-2">Instagram</h3>
                    {
                        hasError &&
                        <Alert variant="outlined" severity="error">
                           {hasError}
                        </Alert>
                    }
                  
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                         <Input placeholder="Name" type="text" className="form__input" value={username} onChange={(e)=>setUsername(e.target.value)}></Input>
                    </div>
                    <div className="form-group">
                         <Input placeholder="email" type="email" className="form__input" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                    </div>
                    <div className="form-group">
                         <Input placeholder="password" type="password" className="form__input" value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
                    </div>         
                    <button className="btn btn-theme" type="submit">Register</button>
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
