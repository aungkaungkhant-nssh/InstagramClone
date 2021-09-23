import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { onAuthStateChanged } from '@firebase/auth';
import {auth} from './firebase'
import { AuthPorvider } from './components/Auth';
let app;
onAuthStateChanged(auth,()=>{
   if(!app){
    app=ReactDOM.render(
      <React.StrictMode>
           <AuthPorvider>
              <App />
           </AuthPorvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
   }
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
