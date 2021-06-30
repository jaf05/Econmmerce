import {Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
export default function MenuW(params) {
    return(
        <div className="menu">
        <Container>
            <Grid>
            <Grid.Column className="menu_left" width={6}>
              <Todo/>
            </Grid.Column>
            <Grid.Column className="menu_right" width={10}>
            <MenuOptions/>
            </Grid.Column>
                        </Grid>
        </Container>
        </div>
    );
}
function Todo(){
    return(
        <Menu>
            <Link href="/lacteos">
                <a>
                <Menu.Item> Lacteos </Menu.Item>
                </a>
            </Link>

            <Link href="/bebidas">
                <a>

                <Menu.Item> Bebidas </Menu.Item>
                
                </a>
           
            </Link>

            <Link href="/frutas">
                <a>

                <Menu.Item>  Vegetales </Menu.Item>
                
                </a>
            
            </Link>

            <Link href="/carnes">
                <a>
                <Menu.Item> Carne </Menu.Item>
             
                </a>
            
            </Link>

            <Link href="/insumos">
                <a>
                
                <Menu.Item> Insumos </Menu.Item>
                
                </a>
            </Link>
           
           
        </Menu>
    )
}
function MenuOptions(){
    return(
        <Menu>
<Menu.Item>
            <Icon name="user outline"/>
            Cuenta
        </Menu.Item>
        </Menu>
        
    )
}