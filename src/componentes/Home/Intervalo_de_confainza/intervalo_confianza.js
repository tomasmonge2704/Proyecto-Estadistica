import { Spacer, Card, Text, Input, Button, Modal, Row, Grid } from "@nextui-org/react";
import ModalTipoDeDatos from "./modalTipoDeDatos";
import React from "react";
export default function Intervalo_de_confianza() {
    const [visible, setVisible] = React.useState(false);
    const [visibleInputs, setVisibleInputs] = React.useState(false);
    const handler = () => setVisible(true);
    const handlerInputs = () => setVisibleInputs(true);
    const closeHandler = () => {
        setVisible(false);
    };
    const list = [
        {
            title: "Agrupados",
            img: "https://i0.wp.com/lasmatesfaciles.com/wp-content/uploads/2021/05/image-22.png?resize=840%2C472&ssl=1"
        },
        {
            title: "Sueltos",
            img: "https://cdn.pruebat.org/video/9cH1csY4Ns4/portada.png"
        }
    ];
    return (
        <>
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
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Tipo de
                        <Text b size={18}> Datos</Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>

                    {visibleInputs == true ? (<ModalTipoDeDatos/>) : (
                        list.map((item, index) => (
                                <Grid xs={12} sm={12} key={index}>
                                    <Card isPressable onClick={handlerInputs}>
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