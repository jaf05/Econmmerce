import {BASE_PATH } from "../utils/constant";

export  async function registrarUsuario(formData){
    console.log(formData);
    try{
        const url = `${BASE_PATH}/auth/local/register`;
        const params ={
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        };
        const response  = await fetch(url, params);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }

}


export  async function loginApi(formData){
    console.log(formData);
    try{
        const url = `http://localhost:1337/auth/local/`;
        const params ={
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        };
        const response  = fetch(url, params);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }

}
