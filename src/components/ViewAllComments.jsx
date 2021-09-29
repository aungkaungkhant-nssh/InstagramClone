import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import { collection,onSnapshot, query ,orderBy } from "firebase/firestore"; 
import {db} from '../firebase'
import { useState } from 'react';
import ViewSingleComment from './ViewSingleComment';
import './Comments.css'
import { Card } from '@material-ui/core';
function ViewAllComments() {
   let {id}= useParams();
   const [comments,setComments]=useState([]);
   useEffect(()=>{
    onSnapshot(
        query(collection(db, "comments"),orderBy("created_at","desc"))
        ,
        (snapshot) => {
          let data=[]
          snapshot.forEach((doc)=>{
              if(id===doc.data().post_id){
                data.push(doc.data())
              }
            
          })
          setComments(data)
        },
        (error) => {
            console.log(error.message)
        });
   },[])
    return (
        <div>
            <Nav />
            <Card className="comments__container">
                <div className="homepage">
                    <Link to="/">
                        <i class="fas fa-angle-left back-ward"></i>
                    </Link>
             
                {
                    comments.length>0 
                    ?  <h4 className="text-center m-0 comments__title">All Comments</h4>
                    :  <h4 className="text-center m-0  comments__title">No Comments yet!</h4>
                }
                </div>
                {
                    comments.map(item => <ViewSingleComment username={item.username} comment={item.comment} time={item.created_at}/>)
                }
            </Card>
            
            <Footer />
        </div>
    )
}

export default ViewAllComments
