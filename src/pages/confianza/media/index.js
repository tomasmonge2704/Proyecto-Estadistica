import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import { Spacer } from '@nextui-org/react';
import TablaDatos from "@/components/tabla/tablaDatos";
import Logica from "./logica";
import NavBar from "@/components/navbar/navBar";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosMedia() {
    const [datos, setDatos] = useState({distribucion:"Normal",valores:[]});
    useEffect(() => {
        document.getElementById('media').addEventListener('change', updateValueMedia)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('n').addEventListener('change', updateValuen)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        document.getElementById('distribucion').addEventListener('change', updateValueDistribucion)
        document.getElementById('varianza').addEventListener('change', updateValueVarianza)
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = JSON.parse(sessionStorage.getItem('datos'));
            setDatos(datosStorage)
        })
    }, []);
    function updateValueDistribucion(e) {
        if (e.target.checked == true) {
            datos.distribucion = "Normal"
        } else {
            datos.distribucion = "No normal"
        }
        setDatos(prevState => ({
            ...prevState,
            distribucion: datos.distribucion

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueMedia(e) {
        datos.media = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            media: datos.media

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueVarianza(e) {
        datos.varianza = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            varianza: datos.varianza

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueDesvio(e) {
        datos.desvio = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            desvio: datos.desvio

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueN(e) {
        datos.N = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            N: datos.N

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValuen(e) {
        datos.n = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            n: datos.n

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueConfianza(e) {
        datos.confianza = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            confianza: datos.confianza

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }

    return (
        <>
            <NavBar page={"/confianza"}/>
            <div className="contenedorInicio">
                <Intervalo_de_confianza datos={datos} />
                <Spacer y={2} />
                <Logica datos={datos}/>
            </div>
            <GraficoIntervaloConfianza datos={datos}/>
            {datos.valores.length !== 0 ? (<div className='contenedorTabla'>
                <TablaDatos valores={datos.valores} />
                <Spacer y={4} />
            </div>) : (<></>)}
        </>)
}