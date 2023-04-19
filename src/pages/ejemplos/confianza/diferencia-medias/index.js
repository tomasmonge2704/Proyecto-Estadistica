import { useState, useEffect } from "react";
import Intervalo_de_confianza from './formDatos';
import Intervalo_de_confianza2 from "./formDatos2";
import { Spacer,Container,Text } from '@nextui-org/react';
import TablaDatos from "@/components/tabla/tablaDatos";
import Logica from "./logica";
import NavBar from "@/components/navbar/navBar";
import GraficoIntervaloConfianza from "@/components/graficos/intConfianza";
export default function GetDatosDiferencia() {
    const [datos, setDatos] = useState({"distribucion":"Normal","valores":[],"N":40,"confianza":90,"N2":45,"media":20.75,"media2":19.8,"desvio":2.25,"desvio2":1.9});
    useEffect(() => {
        document.getElementById('media').addEventListener('change', updateValueMedia)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
        document.getElementById('varianza').addEventListener('change', updateValueVarianza)
        document.getElementById('media2').addEventListener('change', updateValueMedia2)
        document.getElementById('desvio2').addEventListener('change', updateValueDesvio2)
        document.getElementById('N2').addEventListener('change', updateValueN2)
        document.getElementById('confianza2').addEventListener('change', updateValueConfianza)
        document.getElementById('varianza2').addEventListener('change', updateValueVarianza2)
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = JSON.parse(sessionStorage.getItem('datos'));
            setDatos(datosStorage)
        })
    }, []);

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
    //2
    function updateValueMedia2(e) {
        datos.media2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            media2: datos.media2

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueVarianza2(e) {
        datos.varianza2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            varianza2: datos.varianza2

        }))
        sessionStorage.setItem('datos', JSON.stringify(datos));
    }
    function updateValueDesvio2(e) {
        datos.desvio2 = Number(e.target.value)
        setDatos(prevState => ({
            ...prevState,
            desvio2: datos.desvio2

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
          La subdirectora del sevicio de enfermeras de un hospital observo recientemente que los salarios de las enfermeras sindicalizadas parecian ser un poco mas alto que las no sindicalizadas.
        </Text>
        <Text>
          Seria razonable que concluyera que las enfermeras sindicalizadas ganan mas que las no sindicalizadas? Utilizar una confianza del 90%
        </Text>
        <Text>
          Sindicalizadas: salario promedio = $20.75 ; desviacion estandar muestral = 2.25 ; tamaño de la muestra = 40
        </Text>
        <Text>
         No Sindicalizadas: salario promedio = $19.80 ; desviacion estandar muestral = 1.9 ; tamaño de la muestra = 45
        </Text>
        <Text>
          Resultado esperado: 0.20 ≤ μ1 - μ2 ≤ 1.7
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