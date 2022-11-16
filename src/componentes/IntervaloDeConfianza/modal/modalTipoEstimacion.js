import { Card, Grid,Modal,Text,Row, useTheme} from "@nextui-org/react";
import img1 from "../../../img/image004.png"
import img2 from "../../../img/proporcion.png"
import img3 from "../../../img/varianza.png"
import img4 from "../../../img/diferenciaMedias.png"
import img5 from "../../../img/diferenciaProporciones.png"
import img6 from "../../../img/estimarN.png"
import React from "react";
import GetDatosMedia from "../estimarMedia/GetDatos";
import GetDatosProporcion from "../estimarProporcion/GetDatos";
import GetDatosVarianza from "../estimarVarianza/GetDatos";
import GetDatosDiferencia from "../estimarDiferencia/GetDatos";
import GetDatosDiferenciaProporciones from "../estimarDiferenciaProporciones/GetDatos";
import GetDatosEstimarN from "../estimarN/GetDatos";
import isMobile from "is-mobile";
import { useTheme as useNextTheme } from 'next-themes'
export default function ModalTipoDeEstimacion() {
    const list = [
        {
            title: "Estimacion de la Media Poblacional",
            img: img1
        },
        {
            title: "Estimacion del tamaño de Muestra",
            img: img6
        },
        {
            title: "Estimacion de la Proporcion Poblacional",
            img: img2
        },
        {
            title: "Estimacion de la Varianza",
            img: img3
        }
        ,
        {
            title: "Estimacion de la Diferencia de Medias",
            img: img4
        }
        ,
        {
            title: "Estimacion de la Diferencia de Proporciones",
            img: img5
        }
    ];
    const { isDark, type } = useTheme();
    const [visible, setVisible] = React.useState(true);
    const [estimacion, setEstimacion] = React.useState("Estimacion de la Media Poblacional");
    const handlerEstimacion = (title) => {
        setEstimacion(title)
        setVisible(false)
    };
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <>
        {estimacion == "Estimacion de la Media Poblacional" ? (<GetDatosMedia/>) : (<></>)}
        {estimacion == "Estimacion del tamaño de Muestra" ? (<GetDatosEstimarN/>) : (<></>)}
        {estimacion == "Estimacion de la Proporcion Poblacional" ? (<GetDatosProporcion/>) : (<></>)}
        {estimacion == "Estimacion de la Varianza" ? (<GetDatosVarianza/>) : (<></>)}
        {estimacion == "Estimacion de la Diferencia de Medias" ? (<GetDatosDiferencia/>) : (<></>)}
        {estimacion == "Estimacion de la Diferencia de Proporciones" ? (<GetDatosDiferenciaProporciones/>) : (<></>)}

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
                    <Text b size={18}> Estimacion</Text>
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
