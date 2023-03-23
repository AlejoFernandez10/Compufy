import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD46wqUQk4EHl2D4ScaddK7StAuoXnVYho",
  authDomain: "compufy-data.firebaseapp.com",
  projectId: "compufy-data",
  storageBucket: "compufy-data.appspot.com",
  messagingSenderId: "450150116707",
  appId: "1:450150116707:web:8954bed811cc3721583756"
};

// Initialize Firebase
initializeApp(firebaseConfig);






ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
  ,
)
