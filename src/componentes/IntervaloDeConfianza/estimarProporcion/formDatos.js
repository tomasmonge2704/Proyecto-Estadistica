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
                    <Input id='R' type="number" label="Cantidad de elementos con atributo determinado"/>
                    <Spacer y={1} />
                    <Input id='N' type="number" label="Tamaño de la Poblacion"/>
                    <Spacer y={1} />
                    <Input id='confianza' type="number" label="Nivel de Confianza" />
                    <Spacer y={1} />
                </Card.Body>
            </Card>
        </>
    )
}