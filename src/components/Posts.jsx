import React, { useContext } from 'react'
import { Button, Card } from '@material-ui/core';
import "./Posts.css"
import { AuthContext } from './Auth';
import { useEffect } from 'react';
import {db} from '../firebase'
import { collection,onSnapshot, query ,orderBy} from "firebase/firestore"; 
import { useState } from 'react';
function Posts() {
    const {currentUser}=useContext(AuthContext);
    const [postsError,setPostsError]=useState();
    const [posts,setPosts]=useState([]);
    const [comment,setComment]=useState("");

    useEffect(()=>{        
        onSnapshot(
            query(collection(db, "posts"),orderBy("created_at","desc"))
            ,
            (snapshot) => {
              const data=[]
              snapshot.forEach((doc)=>{
                data.push(doc.data());
              })
             setPosts(data);
            },
            (error) => {
              setPostsError(error.message)
            });
    },[])
    const sendComment=(e)=>{
        e.preventDefault();
        alert(1)
    }
    return (
        <div className="posts">  
            {
               posts.map((post)=>{
                   const avatar=`https://ui-avatars.com/api/?name=${post.username}&background=0984e3&color=fff`;
                   return(
            <Card className="post__card mb-3">
                <div className="post__header">
                    <div className="post__title" >
                        <img src={avatar} alt="" />
                        <h6 className="post__username">{post.username}</h6>
                    </div>
                    <p className="post__caption">{post.caption}</p>
                </div>
                <div className="post__image">
                   <img src={post.imgUrl} alt="" />
                </div>
                <div className="post__reaction">
                    <div className="post__react">
                        <i class="far fa-heart"></i>
                        <div>
                            <span class="text-muted">100 Likes</span>
                        </div>
                        
                    </div>
                    <div className="post__comment">
                        <p className="mb-0"><strong className="mr-2">Nan Su San Htike  </strong><small>I Like this</small></p>
                        <span class="text-muted">View All Comment</span>
                    </div>
                    <div className="post__comment__box">
                        <form onSubmit={sendComment}>
                            <div class="input-group">
                                <input type="text" className="form-control" placeholder="Add a comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                                <div class="input-group-append">
                                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Card> 
                   )
               })
            }
           
            
        </div>
    )
}

export default Posts
