import React,{useState,useContext} from 'react'
import './Posts.css'
import {  Card } from '@material-ui/core';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {db} from '../firebase'
import { AuthContext } from './Auth';
import { collection,onSnapshot, query ,orderBy,addDoc, Timestamp,limit } from "firebase/firestore"; 
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Post({id,username,avatar,caption,imgUrl}) {
    const [comment,setComment]=useState("");
    const {currentUser}=useContext(AuthContext);
    const [latestComments,setLatestComments]=useState({});
    const [totalLikes,setTotalLikes]=useState(null);
    const [incrementLike,setIncrementLike]=useState(1);
    const [likeId,setLikeId]=useState(null)
    const sendComment=(post_id)=>{
        addDoc(collection(db,"comments"),{
            created_at:Timestamp.fromDate(new Date()),
            comment:comment,
            post_id:post_id,
            username:currentUser.displayName,
        }).then(()=>{
           setComment("");
        })
    }
   
   ////comments fetch
    useEffect(()=>{
        onSnapshot(
            query(collection(db, "comments"),orderBy("created_at","desc"))
            ,
            (snapshot) => {
                let data=[];
              snapshot.forEach((doc)=>{
                
                  if(doc.data().post_id===id){
                      data.push(doc.data());
                   
                  }
              })
              data.length>0 &&     setLatestComments({username:data[0].username,comment:data[0].comment})
            },
            (error) => {
                console.log(error.message)
            });
    },[])
   ///likes fetch
   useEffect(()=>{
    onSnapshot(
        query(collection(db, "likes"))
        ,
        (snapshot) => {
            let data=[];
          snapshot.forEach((doc)=>{
            if(doc.data().post_id===id){
                setTotalLikes(doc.data().like)
                setLikeId(doc.id)
            }
          })
        },
        (error) => {
            console.log(error.message)
        });
    },[])
    const like_react=async(likeId)=>{
          if(likeId===null){
            addDoc(collection(db,"likes"),{
               post_id:id,
               like:1,
               username:currentUser.displayName
            })
          }else{
             const LikeRef = doc(db, "likes", likeId);
               await updateDoc(LikeRef, {
                   like:totalLikes+1
                 });
          }
           
    }  
      
    return (
        <Card className="post__card mb-3">
                <div className="post__header">
                    <div className="post__title" >
                        <img src={avatar} alt="" />
                        <h6 className="post__username">{username}</h6>
                    </div>
                    <p className="post__caption">{caption}</p>
                </div>
                <div className="post__image">
                   <img src={imgUrl} alt="" />
                </div>
                <div className="post__reaction">
                    <div className="post__react">
                        <i class="far fa-heart" onClick={()=>like_react(likeId)}></i>
                        {
                            (totalLikes)
                            ? <div>
                            <span class="text-muted">
                                {totalLikes}likes
                            </span>
                            </div>
                            :""
                        }
                    </div>
                    {
                        latestComments?.username &&
                        <div className="post__comment">
                        <p className="mb-0"><strong className="mr-2">{latestComments?.username}</strong><small>{latestComments?.comment}</small></p>
                        <Link to={`view-all-comments/${id}`}>
                            <span class="text-muted all__comment">View All Comment</span>
                        </Link>
                       
                    </div>
                    }
                   
                    <div className="post__comment__box">
                            <div class="input-group">
                                <input type="text" className="form-control" placeholder="Add a comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                                <div class="input-group-append">
                                    <button type="submit" class="input-group-text" onClick={()=>sendComment(id)}><i class="fas fa-paper-plane"></i></button>
                                </div>
                            </div>
                    </div>
                </div>
            </Card> 
    )
}

export default Post
