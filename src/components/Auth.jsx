import React,{useEffect} from 'react'
import { onAuthStateChanged } from '@firebase/auth';
import {auth} from '../firebase'
import { useState } from 'react';

export const AuthContext=React.createContext();

export const AuthPorvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(true)
            }else{
                setCurrentUser(null)
            }
        })
    },[]);
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}