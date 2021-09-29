import { Card } from '@material-ui/core'
import React from 'react'
import './Comments.css'
function ViewSingleComment({username,comment,time}) {
    return (
            <div className="single__comment">
                <h6 className="mb-0 mr-4 single__comment__username">{username}</h6>
                <div>
                    <p className="mb-0 text-muted comment ">{comment}</p>
                    <p className="mb-0 text-muted time "> {time.toDate().toDateString()} {time.toDate().toLocaleTimeString()}</p>
                </div>

               
            </div>
    )
}

export default ViewSingleComment
