import React,{useState} from 'react'
import Nav from './Nav'
import Posts from './Posts'
// import ImageUpload from './ImageUpload'
function Instagram() {
   
    return (
        <div className="instagram">
            <Nav />
            <Posts/>
            {/* <ImageUpload /> */}
        </div>
    )
}

export default Instagram
