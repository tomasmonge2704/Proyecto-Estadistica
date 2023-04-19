import NavBar from "@/components/navbar/navBar"
import { Text } from "@nextui-org/react"
export default function InicioHipotesis ({page}){
    return (
        <>
        <NavBar page={page}/>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Text h2>Proximamente...</Text>
        </div>
        </>
    )
}