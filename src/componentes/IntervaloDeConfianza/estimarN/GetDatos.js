import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import { Spacer } from '@nextui-org/react';
import LogicaProporcion from "./logica";
import GraficoIntervaloConfianza from "../../graficos/intConfianza";
export default function GetDatosEstimarN() {
    const [datos, setDatos] = useState({distribucion:"Normal",valores:[]});
    useEffect(() => {
        document.getElementById('varianza').addEventListener('change', updateValueVarianza)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('proporcion').addEventListener('change', updateValueP)
        document.getElementById('E').addEventListener('change', updateValueE)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = JSON.parse(sessionStorage.getItem('datos'));
            setDatos(datosStorage)
        })
    }, []);
    function updateValueP(e) {
        datos.P = Number(e.target.value)
        datos.R = Number(datos.P) * datos.N
        setDatos(prevState => ({
            ...prevState,
            P: datos.P,R:datos.R

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
    function updateValueE(e) {
        datos.E = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            E: datos.E

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
            <div className="contenedorInicio">
                <Intervalo_de_confianza datos={datos} />
                <Spacer y={2} />
                <LogicaProporcion datos={datos}/>
            </div>
            <GraficoIntervaloConfianza datos={datos}/>
        </>)
}