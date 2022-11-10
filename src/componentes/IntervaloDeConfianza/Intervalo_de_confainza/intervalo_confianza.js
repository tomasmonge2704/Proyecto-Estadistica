import { Spacer, Card, Text, Input, Button, Modal, Row, Grid } from "@nextui-org/react";
import ModalTipoDeDatos from "../modal/modalTipoDeDatos";
import React from "react";
export default function Intervalo_de_confianza() {
    const [visible, setVisible] = React.useState(false);
    const [type, setType] = React.useState(false);
    const [visibleInputs, setVisibleInputs] = React.useState(false);
    const handler = () => setVisible(true);
    const handlerInputs = (title) => {setVisibleInputs(true); setType(title)};
    const closeHandler = () => {
        setVisible(false);
    };
    const list = [
        {
            title: "Agrupados en intervalos",
            img: "https://i.ytimg.com/vi/CuKr7GzohbI/maxresdefault.jpg"
        },
        {
            title: "Sueltos",
            img: "https://seactuario.com/ContMatematicas/ProbEstadistica/ImagesProbab/EjercFrecAgrup.png"
        }
    ];
    return (
        <>
            <Card isHoverable variant="bordered" css={{ mw: "500px" }} className="cardConfianza">
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
                    <Spacer y={1} />
                    <Button shadow color="success" auto onClick={handler}>
                        Agregar Valores
                    </Button>
                </Card.Body>
            </Card>
            <Modal
                closeButton
                blur
                preventClose
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                css={{margin:"11%"}}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Tipo de
                        <Text b size={18}> Datos</Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    {visibleInputs == true ? (<ModalTipoDeDatos tipoDeDato={type}/>) : (
                        list.map((item, index) => (
                                <Grid xs={12} sm={12} key={index}>
                                    <Card isPressable onClick={() => handlerInputs(item.title)}>
                                        <Card.Body css={{ p: 0 }}>
                                            <Card.Image
                                                src={item.img}
                                                objectFit="cover"
                                                width="100%"
                                                height={140}
                                                alt={item.title}
                                            />
                                        </Card.Body>
                                        <Card.Footer css={{ justifyItems: "center" }}>
                                            <Row wrap="wrap" justify="center" align="center">
                                                <Text b>{item.title}</Text>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                        ))
                    )}

                </Modal.Body>
            </Modal>
        </>
    )
}