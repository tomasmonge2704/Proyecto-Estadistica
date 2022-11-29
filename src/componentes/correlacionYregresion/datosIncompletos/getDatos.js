import Logica from "./logica"
import { useState, useEffect } from "react";
import { Spacer,Grid,Card,Text } from "@nextui-org/react";
import TablaAnalisisConfianza from "./TablaAnalisisConfianza";
import TablaAnalisisVarianza from "./TablaAnalisisVarianza";
import TablaTestIndividuales from "./TablaTestIndividuales";
import TablaAnalisisResiduales from "./TablaAnalisisResiduales";
import TablaAnalisisVarianza2 from "./TablaAnalisisVarianza2";
export default function GetDatosIncompletos() {
    const [datos, setDatos] = useState({ distribucion: "Normal",intervalos:[95,95,99,99] ,valores: [] });
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
                <Grid xs={12} md={12} justify="center">
                <Logica datos={datos} />
                </Grid>
            </Grid.Container>
            <Spacer y={2} />
            <div style={{marginLeft:"2%",marginRight:"2%"}}>
                    <Card  variant="bordered">
                        <Card.Body>
                                 <TablaAnalisisConfianza datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
            </div>
        </>
    )
}