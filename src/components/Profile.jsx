import React,{useState,useContext} from 'react'
import Nav from './Nav'


import ProfileDetail from './ProfileDetail'
function Profile() {
    
    return (
        <div className="profile">
            <Nav />
            <ProfileDetail />
        </div>
    )
}

export default Profile