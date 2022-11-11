import { useState, useEffect} from "react";
import Logica from "./logicaDatos";
export default function GetDatos() {
    const [datos, setDatos] = useState({});
    useEffect(() => {
        document.getElementById('media').addEventListener('change', updateValueMedia)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        document.getElementById('distribucion').addEventListener('change', updateValueDistribucion)
    }, []);
    function updateValueDistribucion(e) {
        if(e.target.checked == true){
            datos.distribucion = "Normal"
        }else{
            datos.distribucion = "No normal"
        }
        setDatos(prevState => ({
            ...prevState,
            distribucion: datos.distribucion

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueMedia(e) {
        datos.media = e.target.value
        setDatos(prevState => ({
            ...prevState,
            media: Number(e.target.value)

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueDesvio(e) {
        datos.desvio = e.target.value
        setDatos(prevState => ({
            ...prevState,
            desvio: Number(e.target.value)

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueN(e) {
        datos.N = e.target.value
        setDatos(prevState => ({
            ...prevState,
            N: Number(e.target.value)

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueConfianza(e) {
        datos.media = e.target.value
        setDatos(prevState => ({
            ...prevState,
            confianza: Number(e.target.value)

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    return (<Logica datos={datos}/>)
}