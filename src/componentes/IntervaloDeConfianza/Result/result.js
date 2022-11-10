import { Spacer, Card, Text, Button,Modal } from "@nextui-org/react";
import React from "react";
import ModalFormulas from "../modal/modalFormulas";
export default function Result({ result }) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    return (
    <>
        <Card isHoverable variant="bordered" css={{ mw: "500px" }} className="resultado">
            <Card.Body>

                <Text h1 size={40}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold">Resultados</Text>
                <Spacer y={1} />
                {Object.keys(result).length !== 0 ? (
                    <><Text blockquote css={{ textAlign: "center" }}>Se resuelve con {result.type}<hr />
                        <Spacer y={1} />
                        {result.resultado.pasos.map(e => (
                            <>
                               <Text>{e}</Text>
                               <Spacer y={1} />
                            </>
                        ))}
                        <Text>{result.resultado.resultado}</Text>
                    </Text>
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