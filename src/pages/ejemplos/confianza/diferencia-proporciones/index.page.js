import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import Intervalo_de_confianza2 from "./formDatos2";
import { Spacer,Container,Text } from '@nextui-org/react';
import TablaDatos from "@/components/tabla/tablaDatos";
import NavBar from "@/components/navbar/navBar";
import Logica from "./logica";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosDiferenciaProporciones() {
    const [datos, setDatos] = useState({"distribucion":"Normal","valores":[],"N":60,"N2":67,"R":5,"P1":0.08333333333333333,"R2":7,"P2":0.1044776119402985,"confianza":95});
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
        Se quiere hacer un estudio estadístico sobre la proporción de zurdos, en concreto, se quiere averiguar la diferencia entre las proporciones de zurdos entre hombres y mujeres. Para ello, se toma una muestra de 60 hombres y una muestra de 67 mujeres, de los cuales 5 hombres y 7 mujeres son zurdos. ¿Cuál es el intervalo de confianza para la diferencia de proporciones con un nivel de confianza del 95%?
        </Text>
        <Text>
          Resultado esperado: -0.1224 ≤ P1 - P2 ≤ 0.0801
        </Text>
      </Container>
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