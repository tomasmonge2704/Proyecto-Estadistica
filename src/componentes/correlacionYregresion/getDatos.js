import FormDatos from "./formDatos"
import Logica from "./logica"
import { useState, useEffect } from "react";
import { Spacer } from "@nextui-org/react";
export default function GetDatos() {
    const [datos, setDatos] = useState({ distribucion: "Normal", valores: [] });
    useEffect(() => {
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = JSON.parse(sessionStorage.getItem('datos'));
            setDatos(datosStorage)
        })
    }, []);
    return (
        <div className="contenedorInicio">
            <FormDatos datos={datos} />
            <Spacer y={2} />
            <Logica datos={datos} />
        </div>
    )
}