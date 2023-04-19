import { Spacer, Card, Text, Button,Modal,Input, Grid } from "@nextui-org/react";
import React from "react";
import ModalFormulas from "./modalFormulas";
export default function Result({ datos }) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    function updateDatos(datos){
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.dispatchEvent(new Event("storage"));
    }
    return (
    <>
        <Card isHoverable variant="bordered" css={{ mw: "650px" }} className="resultado">
            <Card.Body>

                <Text h1 size={40}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        textAlign:"center"
                    }}
                    weight="bold">Resumen Resultados</Text>
                <Spacer y={1} />
                    <Grid.Container gap={2}>
                        <Grid xs={6}>
                            <Spacer y={1} />
                                <Input fullWidth type="number" value={datos.Rho ? datos.Rho : ""} onChange={(e) => {datos.Rho = Number(e.target.value);updateDatos(datos)}} label="Coeficiente de correlación múltiple (ρ)" />
                        </Grid>
                        <Grid xs={6}>
                            <Spacer y={1} />
                                <Input fullWidth type="text"  value={datos.RhoCuadrado ? datos.RhoCuadrado : ""} onChange={(e) => {datos.RhoCuadrado = Number(e.target.value);updateDatos(datos)}} label="Coeficiente de Determinación (ρ²)" />
                        </Grid>
                        <Grid xs={12}>
                            <Spacer y={1} />
                                <Input fullWidth type="number" value={datos.RhoCuadradoAjustado ? datos.RhoCuadradoAjustado : ""}  onChange={(e) => {datos.RhoCuadradoAjustado = Number(e.target.value);updateDatos(datos)}} label="R² ajustado" />
                                
                        </Grid>
                        <Grid xs={12}>
                            <Spacer y={1} />
                                <Input fullWidth type="number" value={datos.ErrorTipico ? datos.ErrorTipico : ""} onChange={(e) => {datos.ErrorTipico = Number(e.target.value);updateDatos(datos)}} label="Error típico" />
                        </Grid>
                        <Grid xs={12}>
                            <Spacer y={1} />
                            <Input fullWidth type="number" value={datos.N ? datos.N : ""} onChange={(e) => {datos.N = Number(e.target.value);updateDatos(datos)}} label="Observaciones" />
                        </Grid>
                        <Grid xs={12}>
                        <Spacer y={1} />
                            <Button css={{width:"100%"}} shadow color="gradient" auto onClick={handler}>
                                Ver formulas
                            </Button>
                        </Grid>
                        {datos.Rho ? <Text blockquote css={{ textAlign: "center" }}>{datos.Rho > 0.25 ? `Como Rho es mayor a 0,25 existe relacion entre variables. El ${datos.RhoCuadrado} de las variaciones de "y" pueden ser explicadas como consecuencias de las variaciones que se producen en "x"` 
                        : `Como Rho es menor a 0,25 no existe relacion entre variables. Solo el ${datos.RhoCuadrado} de las variaciones de "y" pueden ser explicadas como consecuencias de las variaciones que se producen en "x"`}</Text> 
                        : <></>}
                        {datos.beta1 ? <Text blockquote css={{ textAlign: "center" }}>{`independientemente de ${datos.beta1} lo ganado es: ${datos.beta0}. Por cada adicional se va a incrementar en ${datos.beta1}`}</Text> :<></>}
                        {datos.PromedioDeCuadradosTotal ? <Text blockquote css={{ textAlign: "center" }}>La variabilidad de Y es de: {datos.PromedioDeCuadradosTotal} medida en terminos de varianza insesgada</Text> : <></>}
                        </Grid.Container>
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
                Formulas
            </Text>
        </Modal.Header>
        <Modal.Body>
            <ModalFormulas/>
        </Modal.Body>
    </Modal>
    </>
    )
}