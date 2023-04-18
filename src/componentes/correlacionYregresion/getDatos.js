import FormDatos from "./formDatos"
import Logica from "./logica"
import { useState, useEffect } from "react";
import { Spacer, Card, Text,Grid } from "@nextui-org/react";
import TablaAnalisisVarianza from "../tabla/tablaAnalisisVarianza";
import TablaAnalisisConfianza from "../tabla/TablaAnalisisConfianza";
import TablaTestIndividuales from "../tabla/tablaTestIndividuales";
import TablaAnalisisResiduales from "../tabla/tablaAnalisisResiduales";
import TablaAnalisisVarianza2 from "../tabla/tablaAnalisisVarianza2";
import GraficoCorrelacion from "../graficos/correlacion";
export default function GetDatosXeY() {
    const [datos, setDatos] = useState({ distribucion: "Normal",intervalos:{confianza:[95,95,99,99]} ,valores:[] });
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
                    <GraficoCorrelacion datos={datos}/>                 
                    <Spacer y={2} />
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