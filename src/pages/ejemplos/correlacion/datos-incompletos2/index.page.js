import Logica from "@/components/datos-incompletos/logica";
import { useState, useEffect } from "react";
import Contenedor from "@/components/datos-incompletos/contenedor";
export default function GetDatosIncompletos() {
    const [datos, setDatos] = useState({
        "distribucion": "Normal",
        "intervalos": {
            "confianza": [
                95,
                95,
                99,
                99
            ],
            "data": [
                {
                    "row": "Ordenada al origen (𝛽⁰)",
                    "coef": 0,
                    "inf1": -0.282444533,
                    "sup1": 81.0818087,
                    "inf2": 0,
                    "sup2": 0
                },
                {
                    "row": "Pendiente (𝛽¹)",
                    "coef": 0,
                    "inf1": 0,
                    "sup1": 0,
                    "inf2": -1.025981608,
                    "sup2": 1.266960785
                }
            ]
        },
        "valores": [],
        "Rho": 0.123718251,
        "N1": 9,
        "sumaDeCuadradosTotal": 8950.4,
        "promedioDeCuadradosTotal": 994.48889,
        "desvioBeta1": 0.341681415,
        "Tbeta1": 0.352637231,
        "ProbabilidadBeta0": 0.051265198,
        "ProbabilidadBeta1": 0.733470798
    });
    useEffect(() => {
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = Logica(JSON.parse(sessionStorage.getItem('datos')));
            setDatos(datosStorage);
            sessionStorage.setItem('datos', JSON.stringify(datosStorage));
        })
    }, []);
    return (
        <Contenedor datos={datos} />
    )
}