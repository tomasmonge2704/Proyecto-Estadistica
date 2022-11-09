import { Spacer, Card, Text, Button } from "@nextui-org/react";
export default function Result({ result }) {
    return (
        <Card css={{ mw: "400px" }} className="resultado">
            <Card.Body>

                <Text h1 size={40}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold">Resultado</Text>
                <Spacer y={1} />
                {Object.keys(result).length !== 0 ? (
                    <><Text blockquote css={{ textAlign: "center" }}>Se resuelve con {result.type}<hr />
                        <Spacer y={1} />
                        {result.formula}
                        <Spacer y={1} />
                        <Text size="$xs">{result.resultado}</Text>
                    </Text>
                        <Button shadow color="gradient" auto>
                            Ver formulas
                        </Button></>
                )
                    : (<Text blockquote>Completar datos.</Text>)}
            </Card.Body>
        </Card>
    )
}