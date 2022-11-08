import { Input  } from '@nextui-org/react';
import { Spacer,Card, Text } from "@nextui-org/react";
export default function Intervalo_de_confianza() {

    return (
        <Card css={{ mw: "400px" }}>
            <Card.Body>
                <Text h1 size={40}
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold">Intervalo de Confianza</Text>
                <Spacer y={1} />
                <Input id='media' type="number" labelPlaceholder="Media de la muestra" />
                <Spacer y={2} />
                <Input id='desvio' type="number" labelPlaceholder="Desvio" />
                <Spacer y={2} />
                <Input id='N' type="number" labelPlaceholder="Tamaño de muestra" />
                <Spacer y={2} />
                <Input id='confianza' type="number" labelPlaceholder="Nivel de confianza" />
            </Card.Body>
        </Card>
    )
}