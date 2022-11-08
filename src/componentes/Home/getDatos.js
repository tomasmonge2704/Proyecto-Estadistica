import { useState, useEffect } from "react";
import Logica from "./logicaDatos";
export default function GetDatos() {
    const [datos, setDatos] = useState({});
    useEffect(() => {
        document.getElementById('media').addEventListener('change', updateValueMedia)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
    }, []);
    function updateValueMedia(e) {
        setDatos(prevState => ({
            ...prevState,
            media: Number(e.target.value)

        }))
    }
    function updateValueDesvio(e) {
        setDatos(prevState => ({
            ...prevState,
            desvio: Number(e.target.value)

        }))
    }
    function updateValueN(e) {
        setDatos(prevState => ({
            ...prevState,
            N: Number(e.target.value)

        }))
    }
    function updateValueConfianza(e) {
        setDatos(prevState => ({
            ...prevState,
            confianza: Number(e.target.value)

        }))
    }
    
    return (<Logica datos={datos}/>)
}