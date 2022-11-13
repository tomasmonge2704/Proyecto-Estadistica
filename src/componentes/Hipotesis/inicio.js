import NavBar from "../Navbar/Nabvar"
import { Text } from "@nextui-org/react"
export default function InicioHipotesis ({page}){
    return (
        <>
        <NavBar page={page}/>
        <div style={{display:"flex",textAlign:"center"}}>
            <Text h2>Proximamente...</Text>
        </div>
        </>
    )
}