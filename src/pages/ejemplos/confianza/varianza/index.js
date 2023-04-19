import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import { Spacer,Container,Text } from '@nextui-org/react';
import TablaDatos from "@/components/tabla/tablaDatos";
import Logica from "./logica";
import NavBar from "@/components/navbar/navBar";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosVarianza() {
    const [datos, setDatos] = useState({"distribucion":"Normal","valores":[{"value":6,"frecuencia":1,"id":1},{"value":6.4,"frecuencia":1,"id":2},{"value":7,"frecuencia":1,"id":3},{"value":5.8,"frecuencia":1,"id":4},{"value":6,"frecuencia":1,"id":5},{"value":5.8,"frecuencia":1,"id":6},{"value":5.9,"frecuencia":1,"id":7},{"value":6.7,"frecuencia":1,"id":8},{"value":6.1,"frecuencia":1,"id":9},{"value":6.5,"frecuencia":1,"id":10},{"value":6.3,"frecuencia":1,"id":11},{"value":5.8,"frecuencia":1,"id":12}],"N":12,"confianza":95,"tipoDeValores":"Sueltos"});
    useEffect(() => {
        document.getElementById('media').addEventListener('change', updateValueMedia)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        document.getElementById('distribucion').addEventListener('change', updateValueDistribucion)
        document.getElementById('varianza').addEventListener('change', updateValueVarianza)
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
          A un grupo de individuos se les sometio a una dieta especial y al final se les midio el nivel de colesterol en plasma, los resultados fueron los siguientes:
        </Text>
        <Text>
            6 ; 6,4 ; 7 ; 5.8 ; 6 ; 5.8 ; 5.9 ; 6.7 ; 6.1 ; 6.5 ; 6.3 ; 5.8
        </Text>
        <Text>
            Suponiendo que la poblacion de colesterol tiene una distribucion normal, construya un IC del 95% para la varianza poblacional del nivel del colesterol.
        </Text>
        <Text>
          Resultado esperado: 0.0771 ≤ σ² ≤ 0.4428
        </Text>
      </Container>
            <div className="contenedorInicio">
                <Intervalo_de_confianza datos={datos} />
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