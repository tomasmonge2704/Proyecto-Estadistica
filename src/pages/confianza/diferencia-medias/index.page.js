import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import Intervalo_de_confianza2 from "./formDatos2";
import { Spacer } from '@nextui-org/react';
import TablaDatos from "@/components/tabla/tablaDatos";
import Logica from "./logica";
import NavBar from "@/components/navbar/navBar";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosDiferencia() {
    const [datos, setDatos] = useState({distribucion:"Normal",valores:[]});
    useEffect(() => {
        document.getElementById('media').addEventListener('change', updateValueMedia)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        document.getElementById('varianza').addEventListener('change', updateValueVarianza)
        document.getElementById('media2').addEventListener('change', updateValueMedia2)
        document.getElementById('desvio2').addEventListener('change', updateValueDesvio2)
        document.getElementById('N2').addEventListener('change', updateValueN2)
        document.getElementById('confianza2').addEventListener('change', updateValueConfianza)
        document.getElementById('varianza2').addEventListener('change', updateValueVarianza2)
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = JSON.parse(sessionStorage.getItem('datos'));
            setDatos(datosStorage)
        })
    }, []);

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
    function updateValueConfianza(e) {
        datos.confianza = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            confianza: datos.confianza

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    //2
    function updateValueMedia2(e) {
        datos.media2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            media2: datos.media2

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueVarianza2(e) {
        datos.varianza2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            varianza2: datos.varianza2

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueDesvio2(e) {
        datos.desvio2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            desvio2: datos.desvio2

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueN2(e) {
        datos.N2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            N2: datos.N2

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }

    return (
        <>
            <NavBar page={"/confianza"}/>
            <div className="contenedorInicio">
                <Intervalo_de_confianza datos={datos} />
                <Spacer y={2} />
                <Intervalo_de_confianza2 datos={datos}/>
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