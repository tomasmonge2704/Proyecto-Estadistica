import { Spacer, Card, Text, Button,Modal } from "@nextui-org/react";
import React from "react";
import ModalFormulas from "@/components/modal/modalFormulas";
export default function Result({ result }) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    return (
    <>
        <Card isHoverable variant="bordered" css={{ mw: "650px" }} className="resultado">
            <Card.Body>

                <Text h1 size={40}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        textAlign:"center"
                    }}
                    weight="bold">Resultados</Text>
                <Spacer y={1} />
                {result.beta1 ? (
                    <><Text blockquote css={{ textAlign: "center" }}>
                        <Spacer y={1} />
                            <Text>Coeficiente de correlación múltiple (ρ) = {result.Rho.toFixed(5)}</Text>
                        <Spacer y={1} />
                            <Text>Coeficiente de Determinación (ρ²) = {result.RhoCuadrado}</Text>
                        <Spacer y={1} />
                            <Text>R² ajustado = {result.RhoCuadradoAjustado}</Text>
                        <Spacer y={1} />
                            <Text>Error típico = {result.ErrorTipico}</Text>
                        <Spacer y={1} />
                            <Text>𝛽¹ = {result.beta1}</Text>
                        <Spacer y={1} />
                            <Text>𝛽⁰ = {result.beta0}</Text>
                        <Spacer y={1} />
                            <Text>Observaciones = {result.N}</Text>
                        
                    </Text>
                        <Spacer y={1} />
                        <Button shadow color="gradient" auto onClick={handler}>
                            Ver formulas
                        </Button></>
                )
                    : (<Text blockquote>Completar datos.</Text>)}
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