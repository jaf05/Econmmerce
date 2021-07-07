import {Container,Grid,Image,Input} from "semantic-ui-react";
import Link from "next/link";
export default function TopBar() {
    return(
        <div className="top-bar">
            <Grid className="top-bar">
                <Grid.Column width={8} className="top-bar_le">
                   <Lg/>
                </Grid.Column>
                <Grid.Column width={8} className="top-bar_ri">
              <Buscar/>
                 </Grid.Column>
            </Grid>
        </div>
    )
}
function Lg(){
    return(
        <Link href="/">
            <a>
            <Image src="/logos.jpg" alt="Abarrotes"/>
            </a>
        </Link>
       
    )
}
function Buscar(){
    return(
        <Input id="buscar-todo"/>
    )
}