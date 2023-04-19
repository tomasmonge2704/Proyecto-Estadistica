import { Spacer, Card, Text, Input, Button, Modal, Row, Grid, Switch } from "@nextui-org/react";
import ModalTipoDeDatos from "@/components/modal/modalTipoDeDatos";
import React from "react";
export default function Intervalo_de_confianza2({ datos }) {
    const [visible, setVisible] = React.useState(false);
    const [normal, setNormal] = React.useState(true);
    const [visibleInputs, setVisibleInputs] = React.useState(false);
    const handler = () => setVisible(true);
    const handlerInputs = (title) => { setVisibleInputs(true); datos.tipoDeValores = title };
    const closeHandler = () => {
        setVisible(false);
    };
    function obtenerMedia(){
        let media = 0
        datos.valores.forEach( e => {
            media = media + Number(e.value)
            });
        return media / datos.valores.length
    }
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
            <Card isHoverable variant="bordered" css={{ mw: "500px"}} className="cardConfianza">
            <Card.Body>
                    <Text h1 size={40}
                        css={{
                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            textAlign: "center"
                        }}
                        weight="bold">Datos de la Muestra 2</Text>
                    <Spacer y={1} />
                    <Grid.Container gap={2}>
                        <Grid xs={6}>
                        {datos.R2 ? (<Input id='R2' type="number" value={datos.R2} label="Elementos con atributo" />):(<Input id='R2' placeholder="Ej: 200" type="number"  label="Elementos con atributo" />)}
                        </Grid>
                        <Grid xs={6}>
                        {datos.R2 && datos.N2 ? (<Input id='proporcion2' value={datos.R2/datos.N2} type="number" label="Proporcion de elementos" />) :(<Input id='proporcion2' type="number" placeholder="Ej: 0.75" label="Proporcion de elementos %"/>)}
                        </Grid>
                    </Grid.Container>
                    <Spacer y={1} />
                    <Input id='N2' value={67} type="number" label="Tamaño de la Poblacion" />
                    <Spacer y={1} />
                    {datos.confianza ? (<Input id='confianza2' type="number" disabled value={datos.confianza} label="Nivel de Confianza" />):(<Input id='confianza2' type="number" placeholder="Ej: 95" label="Nivel de Confianza" />)}               
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