import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { registrarUsuario } from '../../../api/usuario';
import {toast} from "react-toastify";
export default function Register(props){
    const{showLoginForm} = props;
    const[loading,setLoading] =useState(false);
    const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
  onSubmit: async (formData)  =>{
    setLoading(true);
    const response = await registrarUsuario(formData);
    if(response?.jwt){
     showLoginForm();
     toast.success("Se valido correctamente tu datos");

    }else{
    toast.error("Este usuario ya existe");
    }
    setLoading(false);
  } 
  });
     return(
         <Form className="login-f" onSubmit={formik.handleSubmit}>
             <Form.Input 
              name="name"
              type="text"
               placeholder="nombre" 
               onChange={formik.handleChange}
             error={formik.errors.name}
             />
               <Form.Input 
              name="lastname"
              type="text"
               placeholder="apellidos"
               onChange={formik.handleChange}
               error={formik.errors.lastname}
             />
               <Form.Input 
              name="username"
              type="text"
               placeholder="nombre de usuario"
               onChange={formik.handleChange}
               error={formik.errors.username}
             />
               <Form.Input 
              name="email"
              type="email"
               placeholder="correo"
               onChange={formik.handleChange}
               error={formik.errors.email}
             />
               <Form.Input 
              name="password"
              type="password"
               placeholder="clave"
               onChange={formik.handleChange}
               error={formik.errors.password}
             />
          <div className="actions">
              <Button type="button" className="Ingresar" onClick={showLoginForm}>
                  Iniciar Sesión
              </Button>
              <Button type="submit" className="submit" loading={loading}>Registrarse</Button>
          </div>





         </Form>
    )
}
function initialValues(){
  return{

    name:"",
    lastname:"",
    username:"",
    email:"",
    password:"",   
  };
}
function validationSchema(){
  return{
   name: Yup.string().required("Este campo es obligatorio"),
   lastname:Yup.string().required("Este campo es obligatorio"),
   username: Yup.string().required("Este campo es obligatorio"),
   email: Yup.string().email().required("Este campo es obligatorio"),
   password: Yup.string().required("Este campo es obligatorio")
   
  };
}