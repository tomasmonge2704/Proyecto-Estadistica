import { Card, Grid,Modal,Text,Row, useTheme,Link} from "@nextui-org/react";
import React from "react";
import isMobile from "is-mobile";

export default function ModalTipoDeEstimacion() {
    const list = [
        {
            title: "Estimacion de la Media Poblacional",
            href:"/confianza/media",
            img:"image004.png"
        },
        {
            title: "Estimacion del tamaño de Muestra",
            href:"/confianza/N",
            img: "estimarN.png"
        },
        {
            title: "Estimacion de la Proporcion Poblacional",
            href:"/confianza/proporcion-poblacional",
            img: "proporcion.png"
        },
        {
            title: "Estimacion de la Varianza",
            href:"/confianza/varianza",
            img: "varianza.png"
        }
        ,
        {
            title: "Estimacion de la Diferencia de Medias",
            href:"/confianza/diferencia-medias",
            img: "diferenciaMedias.png"
        }
        ,
        {
            title: "Estimacion de la Diferencia de Proporciones",
            href:"/confianza/diferencia-proporciones",
            img: "diferenciaProporciones.png"
        }
    ];
    const { isDark, type } = useTheme();
    const [visible, setVisible] = React.useState(true);
    const closeHandler = () => {
        setVisible(false);
    };
    return (
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
                                <Link
                                    color="inherit"
                                    css={{
                                    minWidth: "100%",
                                    }}
                                    href={item.href}
                                >
                                <Card isPressable isHoverable variant="bordered" >
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
                                </Link>
                            </Grid>
                            ))
            }
            </Grid.Container>
            </Modal.Body>
        </Modal>
    );
}