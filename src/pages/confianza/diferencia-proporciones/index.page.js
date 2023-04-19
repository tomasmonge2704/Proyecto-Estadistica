import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import Intervalo_de_confianza2 from "./formDatos2";
import { Spacer } from '@nextui-org/react';
import TablaDatos from "@/components/tabla/tablaDatos";
import NavBar from "@/components/navbar/navBar";
import Logica from "./logica";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosDiferenciaProporciones() {
    const [datos, setDatos] = useState({distribucion:"Normal",valores:[]});
    useEffect(() => {
        document.getElementById('R').addEventListener('change', updateValueR)
        document.getElementById('R2').addEventListener('change', updateValueR2)
        document.getElementById('proporcion').addEventListener('change', updateValueP)
        document.getElementById('proporcion2').addEventListener('change', updateValueP2)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('N2').addEventListener('change', updateValueN2)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = JSON.parse(sessionStorage.getItem('datos'));
            setDatos(datosStorage)
        })
    }, []);
    function updateValueR(e) {
        datos.R = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            R: datos.R

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
    function updateValueP(e) {
        datos.P = Number(e.target.value)
        datos.R = Number(datos.P) * datos.N
        setDatos(prevState => ({
            ...prevState,
            P: datos.P,R:datos.R

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueP2(e) {
        datos.P2 = Number(e.target.value)
        datos.R2 = Number(datos.P2) * datos.N2
        setDatos(prevState => ({
            ...prevState,
            P2: datos.P2,R2:datos.R2

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueR2(e) {
        datos.R2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            R2: datos.R2

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