import NavBar from "../Navbar/Nabvar"
import { Text } from "@nextui-org/react"

export default function InicioProbabilidad ({page}){
      return (
        <>
        <NavBar page={page}/>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Text h2>Proximamente...</Text>
        </div>
        </>
    )
}