import React,{useEffect} from 'react'
import { onAuthStateChanged } from '@firebase/auth';
import {auth} from '../firebase'
import { useState } from 'react';

export const AuthContext=React.createContext();

export const AuthPorvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const [avatar,setAvatar]=useState("");
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user)
                setAvatar(`https://ui-avatars.com/api/?name=${user.displayName}&background=0984e3&color=fff`)
            }else{
                setCurrentUser(null)
            }
        })
    },[]);
    return(
        <AuthContext.Provider value={{currentUser,avatar}}>
            {children}
        </AuthContext.Provider>
    )
}