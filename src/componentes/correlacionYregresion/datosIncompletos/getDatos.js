import Logica from "./logica"
import { useState, useEffect } from "react";

export default function GetDatosIncompletos() {
    const [datos, setDatos] = useState({ distribucion: "Normal",intervalos:{confianza:[95,95,99,99],data:[
        {
            row: 'Ordenada al origen (𝛽⁰)',
            coef:0,
            inf1: 0,
            sup1: 0,
            inf2: 0,
            sup2: 0
        },
        {
            row: 'Pendiente (𝛽¹)',
            coef:0,
            inf1: 0,
            sup1: 0,
            inf2: 0,
            sup2: 0
        }
    ]} ,valores: [] });
    useEffect(() => {
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = JSON.parse(sessionStorage.getItem('datos'));
            setDatos(datosStorage)
        })
    }, []);
    return (
        <Logica datos={datos} />
    )
}