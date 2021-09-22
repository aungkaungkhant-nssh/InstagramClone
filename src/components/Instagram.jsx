import React,{useState} from 'react'
import Nav from './Nav'
import Posts from './Posts'
function Instagram() {
    const [showDialog,setShowDialog]=useState(false)
    
    return (
        <div className="instagram">
            <Nav showDialogBox={()=>setShowDialog(!showDialog)}/>
            <Posts showDialog={showDialog}/>
        </div>
    )
}

export default Instagram
