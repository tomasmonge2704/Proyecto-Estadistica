import { Spacer, Card, Text, Input, Button, Modal, Row, Grid, Switch } from "@nextui-org/react";
import ModalTipoDeDatos from "@/components/modal/modalTipoDeDatos";
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
                            textAlign:"center"
                        }}
                        weight="bold">Datos de la Muestra</Text>
                    <Spacer y={1} />
                    <Grid.Container gap={2}  justify="center" alignItems="stretch">
                        <Grid xs={3} justify="center" >
                            <Switch shadow color="success" checked={normal} id="distribucion" onChange={(e) => setNormal(e.target.checked)} />
                        </Grid>
                        <Grid xs={9}>
                            <Text h4 css={{textAlign:"center"}}>{normal == true ? "Distribucion Normal" : "Distribucion No Normal"}</Text>
                        </Grid>
                    </Grid.Container>
                    <Grid.Container gap={2}>
                        <Grid xs={6}>
                        {datos.varianza ? (<Input id='desvio' type="number" value={Math.sqrt(datos.varianza)} label="Desvio(√varianza)"/>):(<Input id='desvio' type="number" label="Desvio(√varianza)"/>)}
                        </Grid>
                        <Grid xs={6}>
                            <Input id='varianza' type="number"  label="Varianza"/>
                        </Grid>
                    </Grid.Container>
                    <Spacer y={1} />
                    {datos.valores.length !== 0 ? (<Input id='N' type="number" disabled value={datos.valores.length} label="Tamaño de muestra"/>)
                    :(<Grid.Container gap={2}>
                        <Grid xs={6}>
                            <Input id='N' type="number" label="Tamaño de muestra(N)"/>
                        </Grid>
                        <Grid xs={6}>
                            <Input id='n' type="number" label="Seleccion de la muestra(n)"/>
                        </Grid>
                      </Grid.Container>
                    )}
                    <Spacer y={1} />
                    {datos.valores.length !== 0 ? 
                    (<Input id='media' type="number" value={obtenerMedia()} label="Media de la muestra"/>):(<Input id='media' type="number" label="Media de la muestra"/>)}
                    <Spacer y={1} />
                    <Input id='confianza' placeholder="Ej: 95" type="number" label="Nivel de Confianza" />
                    <Spacer y={1} />
                    {datos.confianza && datos.N <= 30? (<Button shadow color="success" auto onClick={handler}>
                        Agregar Valores
                    </Button>) : (<></>)}
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