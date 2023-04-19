import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import { Spacer,Container,Text } from '@nextui-org/react';
import LogicaProporcion from "./logica";
import NavBar from "@/components/navbar/navBar";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosEstimarN() {
    const [datos, setDatos] = useState({distribucion: "Normal", valores: [], E: 0.05, confianza: 95, P: 0.35, R: null});
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
            <NavBar page={"/confianza"}/>
            <Spacer y={2} />
            <Container justify="center" css={{ textAlign: "center" }}>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Enunciado
        </Text>
        <Text>
          Estimar el tamaño de la poblacion, con una proporcion de elementos = 0,35, con un error de muestreo no superior = 0,05 y un IC del 95%
        </Text>
        <Text>
          Resultado esperado: n = 350
        </Text>
      </Container>
            <div className="contenedorInicio">
                <Intervalo_de_confianza datos={datos} />
                <Spacer y={2} />
                <LogicaProporcion datos={datos}/>
            </div>
            <GraficoIntervaloConfianza datos={datos}/>
        </>)
}