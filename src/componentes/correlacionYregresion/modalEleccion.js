import { Card, Grid,Modal,Text,Row, useTheme} from "@nextui-org/react";
import React from "react";
import isMobile from "is-mobile";
import img1 from "../../img/datosXeY.png"
import img2 from "../../img/datosIncompletos.png"
import GetDatosXeY from "./getDatos";
import GetDatosIncompletos from "./datosIncompletos/getDatos";
export default function ModalSeleccion() {
    const list = [
        {
            title: "Datos con tabla X e Y",
            img: img1
        },
        {
            title: "Datos Incompletos",
            img: img2
        }
    
    ];
    const { isDark, type } = useTheme();
    const [visible, setVisible] = React.useState(true);
    const [estimacion, setEstimacion] = React.useState("Datos con tabla X e Y");
    const handlerEstimacion = (title) => {
        setEstimacion(title)
        setVisible(false)
    };
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <>
        {estimacion == "Datos con tabla X e Y" ? (<GetDatosXeY/>) : (<GetDatosIncompletos/>)}

        <Modal
            blur
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            className="ModalDatos"
            width={isMobile() ? "100vw":"60vw"}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Tipo de
                    <Text b size={18}> Datos</Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
            <Grid.Container gap={2}>
            {list.map((item, index) => (
                            <Grid sm={isMobile() ? 12 : 6 } xs={12}key={index}>
                                <Card isPressable isHoverable variant="bordered" onClick={() => handlerEstimacion(item.title)}>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                            src={item.img}
                                            objectFit="scale-down"
                                            width="100%"
                                            height={140}
                                            alt={item.title}
                                            css={isDark == true ? {filter:"invert(3)"} : {filter:"none"}}
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
            }
            </Grid.Container>
            </Modal.Body>
        </Modal>
        </>
    );
}