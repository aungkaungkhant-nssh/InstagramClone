import React,{useContext} from 'react'
import { Card ,Modal,Input} from '@material-ui/core';
import { AuthContext } from './Auth';
import "./ProfileDetail.css"
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAuth, updatePassword } from "firebase/auth";
const useStyles = makeStyles((theme) => ({
    root: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
      // The position fixed scoping doesn't work in IE 11.
      // Disable this demo to preserve the others.
      '@media all and (-ms-high-contrast: none)': {
        display: 'none',
      },
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #ccc',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  
  }));
  
function ProfileDetail() {
    const {currentUser,avatar}=useContext(AuthContext);
    const [open,setOpen]=useState(false);
    const classes = useStyles();
    const [password,setPassword]=useState("");
    const changePassword=()=>{
        updatePassword(currentUser, password).then(() => {
            setOpen(false);
            setPassword("");
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <div className="profile__detail">
             
            <Card className='text-center profile__detail__card'>
                  <img src={avatar} alt="" />
                  <div className="profile__bio my-3">
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <h6 className="mb-0">Name</h6>
                            <span className="text-muted text-center">{currentUser.displayName}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <h6 className=" mb-0">Email</h6>
                            <span className="text-muted text-center">{currentUser.email}</span>
                        </div>
                  </div>
                  <div className="mb-2">
                        <span className="text-muted change__password" onClick={()=>setOpen(true)}>Change Password</span>
                  </div>
                  
            </Card>
            <Modal
            open={open}
            onClose={()=>setOpen(false)}
            className={classes.modal}
            >
              <div className={classes.paper}>
                  <div className="d-flex align-items-center justify-content-center">
                  <form action="">
                        <div class="input-group">
                            <input type="password" className="form-control" placeholder="new password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <div class="input-group-append">
                                <span className="input-group-text" id="basic-addon2" onClick={changePassword}>update</span>
                            </div>
                        </div>
                  </form>
                  </div>
                  
              </div>
        </Modal>

        </div>
    )
}

export default ProfileDetail
