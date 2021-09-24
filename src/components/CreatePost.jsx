import React,{useContext} from 'react'
import './CreatePost.css'
import { Input,Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {storage,db} from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable,} from "firebase/storage"
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { AuthContext } from './Auth';
import { useHistory } from "react-router-dom";
function CreatePost() {
    let history = useHistory();
    const {currentUser}=useContext(AuthContext);
    const [caption,setCaption]=useState("");
    const [url,setUrl]=useState("");
    const [image,setImage]=useState("");
    const [progress,setProgress]=useState(0)
    const chooseFile=(e)=>{
        e.preventDefault()
        const file = e.target.files[0];
       
        const url=URL.createObjectURL(file);
        setUrl(url);
        setImage(file)
    }
    const createpost=(e)=>{
        e.preventDefault();
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            }, 
            (error) => {
                console.log(error);
                alert(error.message);
            }, 
            () => {
                getDownloadURL(ref(storage,`images/${image.name}`))
                .then((url)=>{
                    addDoc(collection(db,"posts"),{
                        created_at:Timestamp.fromDate(new Date()),
                        caption:caption,
                        imgUrl:url,
                        username:currentUser.displayName,
                    }).then(()=>{
                        setProgress(0)
                        setCaption("");
                        setImage(null)
                        history.push('/')
                    })
                })
             
            }
            );

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
               <Card className="py-3">
                    <progress className="imageprogress" value={progress} max="100"></progress>
                  <form onSubmit={createpost}>
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
