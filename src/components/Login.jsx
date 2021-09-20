import React from 'react'
import './Login.css'
import { Input,Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import Alert from '@mui/material/Alert';
import { useHistory } from "react-router-dom";
function Login() {
    let history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [hasError,setHasError]=useState("");
    const login=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            setEmail("");
            setPassword("");
            history.push("/");
        })
        .catch((error)=>{
            setHasError(error.message);
        })
    }
    return (
        <div className="login">
           <Card>
               <div className="text-center p-3">
                   <h3 className="application-title text-center mb-2">Instagram</h3>
                    {
                        hasError &&
                        <Alert variant="outlined" severity="error">
                           {hasError}
                        </Alert>
                    }
                   <form onSubmit={login}>
                     <div className="form-group">
                            <Input placeholder="email" type="email" className="form__input" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                     </div>
                      <div className="form-group">
                            <Input placeholder="password" type="password" className="form__input" value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
                      </div>
                       <button className="btn btn-theme" type="submit">Login</button>
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
