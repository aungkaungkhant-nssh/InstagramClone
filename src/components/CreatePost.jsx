import React from 'react'
import './CreatePost.css'
import { Input,Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function CreatePost() {
    const [caption,setCaption]=useState("");
    const [url,setUrl]=useState("");
    const chooseFile=(e)=>{
        const file = e.target.files[0];
        const url=URL.createObjectURL(file);
        setUrl(url);
    }
    return (
        <div className="create__post__container">
            <div className="back">
                <Link to="/">
                    <i class="fas fa-angle-left"></i>
                </Link>
            </div>
           
            <div className="create__post">
                {
                        url &&
                        <img src={url} alt="" className="post__preview__img"/>
                }
               <Card className="py-4">
                  <form action="">
                        <div className="form-group mb-3">
                            <Input placeholder="What's on your mind?" type="text" value={caption} onChange={(e)=>setCaption(e.target.value)}></Input>
                        </div>
                        <div className="form-group  mb-3">
                            <input type="file" className="file__upload" onChange={chooseFile}/>
                        </div>
                        <input type="submit" className="btn btn-sm create__post__btn" value="create"/>
                    </form>
               </Card>
                
                
            </div>
        </div>
    )
}

export default CreatePost
