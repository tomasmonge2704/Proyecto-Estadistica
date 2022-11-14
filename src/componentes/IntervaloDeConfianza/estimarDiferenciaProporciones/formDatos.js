import { Spacer, Card, Text, Input, Button, Modal, Row, Grid, Switch } from "@nextui-org/react";
import ModalTipoDeDatos from "../modal/modalTipoDeDatos";
import React from "react";
export default function Intervalo_de_confianza({ datos }) {
    const [visible, setVisible] = React.useState(false);
    const [normal, setNormal] = React.useState(true);
    const [visibleInputs, setVisibleInputs] = React.useState(false);
    const handler = () => setVisible(true);
    const handlerInputs = (title) => { setVisibleInputs(true); datos.tipoDeValores = title };
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
                            textAlign: "center"
                        }}
                        weight="bold">Datos de la Muestra 1</Text>
                    <Spacer y={1} />
                    <Grid.Container gap={2}>
                        <Grid xs={6}>
                        {datos.R ? (<Input id='R' type="number" value={datos.R} label="Elementos con atributo" />):(<Input id='R' type="number"  label="Elementos con atributo" />)}
                        </Grid>
                        <Grid xs={6}>
                        {datos.R && datos.N ? (<Input id='proporcion' value={datos.R/datos.N} type="number" label="Proporcion de elementos" />) :(<Input id='proporcion' type="number" placeholder="Ej: 0.75" label="Proporcion de elementos"/>)}
                        </Grid>
                    </Grid.Container>
                    <Spacer y={1} />
                    <Input id='N' type="number" label="Tamaño de la Poblacion" />
                    <Spacer y={1} />
                    <Input id='confianza' placeholder="Ej: 95" type="number" label="Nivel de Confianza" />
                </Card.Body>
            </Card>
            <Modal
                closeButton
                blur
                preventClose
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                className="ModalDatos"
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Tipo de
                        <Text b size={18}> Datos</Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    {visibleInputs == true ? (<ModalTipoDeDatos datos={datos} />) : (
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