import React, { useContext,useState,useEffect } from 'react'

import "./Posts.css"
import { AuthContext } from './Auth';
import {db} from '../firebase'
import { collection,onSnapshot, query ,orderBy,addDoc, Timestamp } from "firebase/firestore"; 
import Post from './Post';

function Posts() {
    const [postsError,setPostsError]=useState();
    const [posts,setPosts]=useState([]);
    
    const {currentUser}=useContext(AuthContext);
    useEffect(()=>{        
        onSnapshot(
            query(collection(db, "posts"),orderBy("created_at","desc"))
            ,
            (snapshot) => {
              const data=[]
              snapshot.forEach((doc)=>{
                data.push({id:doc.id,...doc.data()});
              })
             setPosts(data);
            },
            (error) => {
              setPostsError(error.message)
            });
    },[])

    return (
        <div className="posts">  
            {
               posts.map((post)=>{
                   const avatar=`https://ui-avatars.com/api/?name=${post.username}&background=0984e3&color=fff`;
                   return(
                        <Post key={post.id} id={post.id} username={post.username} avatar={avatar} caption={post.caption} imgUrl={post.imgUrl}></Post>
                   )
               })
            }
           
            
        </div>
    )
}

export default Posts
