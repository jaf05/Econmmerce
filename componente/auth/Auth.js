import React,  { useState } from "react";
import Login from "./LoginForm/Login";
import Register from "./Register/Register";
export default function Auth(props){
 const {onCloseModal, setTitleModal} = props;
 const [showLogin, setShowLogin]  = useState(true);
 const showLoginForm = () =>
 {
     setTitleModal("Ingresar Cuenta");
    setShowLogin(true);
 }

 const showRegisterForm = () =>
 {
     setTitleModal("Crear una cuenta");
    setShowLogin(false);
 } 
 return showLogin ? (
   <Login showRegisterForm={showRegisterForm}
   onCloseModal={onCloseModal}
   />
 ) : (
     <Register showLoginForm={showLoginForm}/>
 );
}