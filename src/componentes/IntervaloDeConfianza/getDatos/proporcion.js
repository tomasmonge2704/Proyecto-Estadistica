import { useState, useEffect } from "react";
import Intervalo_de_confianza from '../tipoDeEstimacion/proporcion';
import { Spacer } from '@nextui-org/react';
import LogicaProporcion from "../Result/logicaPoblacional";
import GraficoArea from "../grafico";
export default function GetDatosProporcion() {
    const [datos, setDatos] = useState({distribucion:"Normal",valores:[]});
    useEffect(() => {
        document.getElementById('R').addEventListener('change', updateValueR)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        document.getElementById('distribucion').addEventListener('change', updateValueDistribucion)
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
            <GraficoArea/>
        </>)
}