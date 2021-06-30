import React from "react";
import {Container} from "semantic-ui-react";
import Header from "../../componente/header/Header";
export default function BasicLayout() {
    //Children se encargar de reutilizar elementos de un componente de afuera
 
    return(
        <Container fluid className="basic-layout">
            <Header/>
       <Container className="conte">
       </Container>
       
        </Container>
        
    )
}
