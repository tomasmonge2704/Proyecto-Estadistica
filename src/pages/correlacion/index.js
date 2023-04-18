import NavBar from "@/components/navbar/navBar";
import { Card, Grid,Modal,Text,Row, useTheme,Link} from "@nextui-org/react";
import React from "react";
import isMobile from "is-mobile";
import img1 from "../../images/datosXeY.png";
import img2 from "../../images/datosIncompletos.png";

export default function ModalCorrelacionLineal() {
    const list = [
        {
            title: "Datos con tabla X e Y",
            href:"/correlacion/datos",
            img: img1.src
        },
        {
            title: "Datos Incompletos",
            href:"/correlacion/datos-incompletos",
            img: img2.src
        }
    
    ];
    const { isDark, type } = useTheme();
    const [visible, setVisible] = React.useState(true);
    const closeHandler = () => {
        setVisible(false);
    };
    return(
        <>
            <NavBar page={"/correlacion"}/>
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
                                <Link
                                    color="inherit"
                                    css={{
                                    minWidth: "100%",
                                    }}
                                    href={item.href}
                                >
                                <Card isPressable isHoverable variant="bordered">
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
        </>
    )
}