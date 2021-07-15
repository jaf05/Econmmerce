import {Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import Basic from "../Modal/basicModal/BasicModal";
import Auth from "../auth/Auth";
import { useState } from "react";
export default function MenuW() {
    const [showModal, setShowModal]  = useState(false);
    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);
    const [titleModal, setTitleModal] = useState("Ingresar Cuenta");
    return(
        <div className="menu">
        <Container>
            <Grid>
            <Grid.Column className="menu_left" width={6}>
              <Todo/>
            </Grid.Column>
            <Grid.Column className="menu_right" width={10}>
            <MenuOptions onShowModal={onShowModal}/>
            </Grid.Column>
                        </Grid>
        </Container>
        <Basic show={showModal} setShow={setShowModal}
         title ={titleModal} 
         size="small">
           <Auth onCloseModal={onCloseModal} setTitleModal = {setTitleModal}/>
        </Basic>
        </div>
    );
}
function Todo(){
    return(
        <Menu>
            <Link href="/general">
                <a>
                <Menu.Item> General </Menu.Item>
                </a>
            </Link>

            <Link href="/ficcion">
                <a>

                <Menu.Item> Ficción </Menu.Item>
                
                </a>
           
            </Link>

            <Link href="/No_Ficción">
                <a>

                <Menu.Item>  No Ficción </Menu.Item>
                
                </a>
            
            </Link>

            <Link href="/Infantil">
                <a>
                <Menu.Item> Infantil </Menu.Item>
             
                </a>
            
            </Link>
            <Link href="/Juveniles">
                <a>
                <Menu.Item> Juveniles </Menu.Item>
             
                </a>
            
            </Link>
           
           
        </Menu>
    )
}
function MenuOptions(props){
    const {onShowModal} = props;
    return(
        <Menu>
<Menu.Item onClick={onShowModal}>
            <Icon name="user outline"/>
            Usuarios
        </Menu.Item>
        </Menu>
        
    )
}