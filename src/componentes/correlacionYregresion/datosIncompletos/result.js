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
                                <Input fullWidth type="number"  onChange={(e) => {datos.Rho = Number(e.target.value);updateDatos(datos)}} label="Coeficiente de correlación múltiple (ρ)" />
                        </Grid>
                        <Grid xs={6}>
                            <Spacer y={1} />
                                {datos.RhoCuadrado ? <Input readOnly label="Coeficiente de Determinación (ρ²)" placeholder={datos.RhoCuadrado} initialValue={datos.RhoCuadrado} /> : <Input fullWidth type="text"  onChange={(e) => {datos.RhoCuadrado = Number(e.target.value);updateDatos(datos)}} label="Coeficiente de Determinación (ρ²)" />}
                        </Grid>
                        <Grid xs={12}>
                            <Spacer y={1} />
                                {datos.RhoCuadradoAjustado ? <Input readOnly label="R² ajustado" placeholder={datos.RhoCuadradoAjustado} initialValue={datos.RhoCuadradoAjustado} /> : 
                                <Input fullWidth type="number"  onChange={(e) => {datos.RhoCuadradoAjustado = Number(e.target.value);updateDatos(datos)}} label="R² ajustado" /> }
                                
                        </Grid>
                        <Grid xs={12}>
                            <Spacer y={1} />
                                <Input fullWidth type="number"  onChange={(e) => {datos.ErrorTipico = Number(e.target.value);updateDatos(datos)}} label="Error típico" />
                        </Grid>
                        <Grid xs={12}>
                            <Spacer y={1} />
                            {datos.N ? <Input fullWidth label="Observaciones" placeholder={datos.N} initialValue={datos.N} onChange={(e) => {datos.N = Number(e.target.value);updateDatos(datos)}} /> :
                            <Input fullWidth type="number"  onChange={(e) => {datos.N = Number(e.target.value);updateDatos(datos)}} label="Observaciones" />}
                                
                        </Grid>
                        <Grid xs={6}>
                            <Spacer y={1} />
                                <Input fullWidth type="number"  onChange={(e) => {datos.beta1 = Number(e.target.value);updateDatos(datos)}} label="𝛽¹" />
                        </Grid>
                        <Grid xs={6}>
                            <Spacer y={1} />
                                <Input fullWidth type="number"  onChange={(e) => {datos.beta0 = Number(e.target.value);updateDatos(datos)}} label="𝛽⁰" />
                        </Grid>
                        <Grid xs={12}>
                        <Spacer y={1} />
                            <Button css={{width:"100%"}} shadow color="gradient" auto onClick={handler}>
                                Ver formulas
                            </Button>
                        </Grid>
                        
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