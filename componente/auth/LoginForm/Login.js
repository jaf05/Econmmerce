import React, {useState} from "react";
import {From, Button, Form} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {loginApi} from "../../../api/usuario";
export default function Login(props){
    const {showRegisterForm,oncCloseModal} = props
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
    initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
          setLoading(true);
         const response = await loginApi(formData);
      if(response?.jwt){
        oncCloseModal();
        console.log(response);
      }else{
        toast.error("Los datos son incorrectos");
      }
         setLoading(false);
        },
        
      } );
    return(
    <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Input
        name="email"
        type ="email"
        placeholder="Correo electronico"
        
        onChange={formik.handleChange}
        error={formik.errors.email}
        />
        <Form.Input name="password" 
        type="password" placeholder="Contraseña"
        
        onChange={formik.handleChange}
        error={formik.errors.password}
        />
        <div className="actions">
        <Button type="button" basic  onClick={showRegisterForm}>Registrar</Button> 
        <div>
        
            <Button className="submit" type="submit"  loading={loading} >
                Iniciar Sesión
            </Button>
            <Button type="button">Reiniciar Contraseña</Button>
        </div>
        </div>
    </Form>
    )
}





function initialValues(){
    return{
      email:"",
      password:"",   
    };
  }








function validationSchema(){
    return{
     
     email: Yup.string().email().required("Este campo es obligatorio"),
     password: Yup.string().required("Este campo es obligatorio")
     
    };
  }

