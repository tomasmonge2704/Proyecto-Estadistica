import NavBar from "../Navbar/Nabvar";
import GetDatos from "./getDatos";
export default function Correlacion_Y_Regresion({page}){
    return(
        <>
            <NavBar page={page}/>
            <GetDatos/>
        </>
    )
}