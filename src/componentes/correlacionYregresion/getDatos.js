import FormDatos from "./formDatos"
import Logica from "./logica"
import { useState, useEffect } from "react";
import { Spacer, Card, Text,Grid } from "@nextui-org/react";
import TablaAnalisisVarianza from "../tabla/tablaAnalisisVarianza";
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
        <>
            <Spacer y={2} />
            <Grid.Container gap={2} >
                <Grid xs={12} md={6} justify="center">
                <FormDatos datos={datos} />
                </Grid>
                <Grid xs={12} md={6} justify="center">
                <Logica datos={datos} />
                </Grid>
            </Grid.Container>
            <Spacer y={2} />
            {datos.valores.length !== 0 ? (
                <div className='contenedorTabla'>
                    <Card isHoverable variant="bordered">
                        <Card.Body>
                            <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                    }}
                                weight="bold">Analisis de la varianza</Text>
                            <TablaAnalisisVarianza valores={datos.valores} />
                        </Card.Body>
                    </Card>
                    <Spacer y={4} />
                </div>) : (<></>)}
        </>
    )
}