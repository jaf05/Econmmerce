import React,  { useState } from "react";
import Login
 from "./LoginForm/Login";
import Register
 from "./Register";
export default function Auth(props){
    const{onCloseModal}= props;
    const[showLogin, setShowLogin] = useState(true);
   return showLogin ? <h1><Login/></h1> : <h1><Register/></h1>
}