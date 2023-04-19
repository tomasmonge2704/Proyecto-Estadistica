import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import { Spacer,Container,Text } from '@nextui-org/react';
import LogicaProporcion from "./logica";
import NavBar from "@/components/navbar/navBar";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosProporcion() {
    const [datos, setDatos] = useState({distribucion: "Normal", valores: [], R: 560, confianza: 90, N: 800});
    useEffect(() => {
        document.getElementById('R').addEventListener('change', updateValueR)
        document.getElementById('N').addEventListener('change', updateValueN)
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
          Una muestra de 800 unidades genera una proporcion = 0.70, determinar el intervalo de confianza del 90% para la prorporcion de la poblacion.
        </Text>
        <Text>
          Resultado esperado: 0.6734 ≤ P ≤ 0.7266
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