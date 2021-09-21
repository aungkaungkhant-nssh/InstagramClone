import { Input } from '@material-ui/core'
import React from 'react'
import './Nav.css'
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';
import { useState } from 'react';

function Nav() {
    const [isMobile,setIsMobile]=useState(false);
    useEffect(()=>{
        if(window.innerWidth<760){
            setIsMobile(true)
        }
    },[])
    return (
        <div className="nav">
            {
                !isMobile &&
                <div className="nav__header">
                    <h3 className="application-title">Instagram</h3>
                    <div>
                        <Input placeholder="search" />
                    </div>
                    <div className="profile">
                        <img src="https://ui-avatars.com/api/?name=aungkaungkhant&background=0984e3&color=fff" alt="" />
                    </div>
                </div>
            }
           {
               isMobile &&
               <div className="nav__header">
               <div>
                    <h3 className="application-title">Instagram</h3>
               </div>
               <div className="profile">
                    <img src="https://ui-avatars.com/api/?name=aungkaungkhant&background=0984e3&color=fff" alt="" />
               </div>
              </div>
            }
         
        </div>
    )
}

export default Nav
