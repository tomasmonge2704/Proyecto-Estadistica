import { Spacer, Card, Text, Input,Grid, Switch } from "@nextui-org/react";
import React from "react";
export default function Intervalo_de_confianza({ datos }) {
    const [normal, setNormal] = React.useState(true);
    return (
        <>
            <Card isHoverable variant="bordered" css={{ mw: "500px"}} className="cardConfianza">
                <Card.Body>
                    <Text h1 size={40}
                        css={{
                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            textAlign:"center"
                        }}
                        weight="bold">Datos de la Muestra</Text>
                    <Spacer y={1} />
                    <Grid.Container gap={2}>
                        <Grid xs={6}>
                        {datos.varianza ? (<Input id='desvio' type="number" value={Math.sqrt(datos.varianza)} label="Desvio(√varianza)"/>):(<Input id='desvio' type="number" label="Desvio(√varianza)"/>)}
                        </Grid>
                        <Grid xs={6}>
                        {datos.desvio ? (<Input id='varianza' type="number" value={Math.pow(datos.desvio,2)} label="Varianza"/>) : (<Input id='varianza' type="number"  label="Varianza"/>)}
                        </Grid>
                    </Grid.Container>
                    <Spacer y={1} />
                    <Input id='proporcion' placeholder="Ej: 0.43"  type="number" label="Proporcion de elementos %" />
                    <Spacer y={1} />
                    <Input id='E' type="number" label="Error de muestreo no superior a :"/>
                    <Spacer y={1} />
                    <Input id='confianza' placeholder="Ej: 95" type="number" label="Nivel de Confianza" />
                    <Spacer y={1} />
                </Card.Body>
            </Card>
        </>
    )
}