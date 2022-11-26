import FormDatos from "./formDatos"
import Logica from "./logica"
import { useState, useEffect } from "react";
import { Spacer, Card, Text,Grid } from "@nextui-org/react";
import TablaAnalisisVarianza from "../tabla/tablaAnalisisVarianza";
import TablaAnalisisConfianza from "../tabla/TablaAnalisisConfianza";
import TablaTestIndividuales from "../tabla/tablaTestIndividuales";
import TablaAnalisisResiduales from "../tabla/tablaAnalisisResiduales";
import TablaAnalisisVarianza2 from "../tabla/tablaAnalisisVarianza2";
export default function GetDatos() {
    const [datos, setDatos] = useState({ distribucion: "Normal",intervalos:[95,95,99,99] ,valores: [
        {
            "valorX": 2.57,
            "valorY": 0.77,
            "id": 1
        },
        {
            "valorX": 2.5,
            "valorY": 0.74,
            "id": 2
        },
        {
            "valorX": 2.35,
            "valorY": 0.72,
            "id": 3
        },
        {
            "valorX": 2.3,
            "valorY": 0.73,
            "id": 4
        },
        {
            "valorX": 2.25,
            "valorY": 0.76,
            "id": 5
        },
        {
            "valorX": 2.2,
            "valorY": 0.75,
            "id": 6
        },
        {
            "valorX": 2.11,
            "valorY": 1.08,
            "id": 7
        },
        {
            "valorX": 1.94,
            "valorY": 1.81,
            "id": 8
        },
        {
            "valorX": 1.97,
            "valorY": 1.39,
            "id": 9
        },
        {
            "valorX": 2.06,
            "valorY": 1.2,
            "id": 10
        },
        {
            "valorX": 2.02,
            "valorY": 1.17,
            "id": 11
        }
    ] });
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
            {datos.valores.length > 1 ? (
                <div style={{marginLeft:"2%",marginRight:"2%"}}>
                    <Card  variant="bordered">
                        <Card.Body>
                            <TablaAnalisisConfianza datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
                    <Card  variant="bordered">
                        <Card.Body>
                            <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                    }}
                                weight="bold">Test Individuales</Text>
                            <TablaTestIndividuales datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
                    <Card  variant="bordered">
                        <Card.Body>
                            <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                    }}
                                weight="bold">ANOVA</Text>
                            <TablaAnalisisVarianza datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
                    <Card  variant="bordered">
                        <Card.Body>
                            <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                    }}
                                weight="bold">Test de significacion Global</Text>
                            <TablaAnalisisVarianza2 datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
                    <Card  variant="bordered">
                        <Card.Body>
                            <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                    }}
                                weight="bold">Analisis de los residuales</Text>
                            <TablaAnalisisResiduales datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={4} />
                </div>) : (<></>)}
        </>
    )
}