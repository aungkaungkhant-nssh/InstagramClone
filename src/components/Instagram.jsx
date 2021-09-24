import React,{useState} from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Posts from './Posts'

function Instagram() {
   
    return (
        <div className="instagram">
            <Nav />
            <Posts/>
            <Footer />
        </div>
    )
}

export default Instagram
