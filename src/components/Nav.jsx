import { Input } from '@material-ui/core'
import React, { useContext } from 'react'
import './Nav.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from './Auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Nav({showDialogBox}) {
    const [isMobile,setIsMobile]=useState(false);
    const {avatar}=useContext(AuthContext);
    const [showDialog,setShowDialog]=useState(false)
    useEffect(()=>{
        if(window.innerWidth<760){
            setIsMobile(true)
        }
    
    },[])
    return (
        <div className="nav">
              {
                showDialog &&
                <div className="dialog__box">
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                    <hr />
                    <div>
                        <p className="logout__btn" onClick={()=>auth.signOut()}>Logout</p>
                    </div>
                </div>
            }
            {
                !isMobile &&
                <div className="nav__header">
                    <h3 className="application-title">Instagram</h3>
                    <div>
                        <Input placeholder="search" />
                    </div>
                    <div className="profile" onClick={()=>setShowDialog(!showDialog)}>
                        <img src={avatar} alt="" />
                    </div>
                </div>
            }
           {
               isMobile &&
               <div className="nav__header">
               <div>
                    <h3 className="application-title">Instagram</h3>
               </div>
               <div className="profile"  onClick={()=>setShowDialog(!showDialog)}>
                    <img src={avatar} alt="" />
               </div>
              </div>
            }
         
        </div>
    )
}

export default Nav
