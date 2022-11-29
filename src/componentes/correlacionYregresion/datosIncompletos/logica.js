import Result from "./result"
import { Spacer,Grid,Card } from "@nextui-org/react";
import TablaAnalisisConfianza from "./TablaAnalisisConfianza";
import TablaAnalisisVarianza from "./TablaAnalisisVarianza";
import TablaTestIndividuales from "./TablaTestIndividuales";
import TablaAnalisisResiduales from "./TablaAnalisisResiduales";
import TablaAnalisisVarianza2 from "./TablaAnalisisVarianza2";
export default function Logica({datos}) {
    if(datos.beta0) datos.intervalos.data[0].coef = datos.beta0;
    if(datos.beta1) datos.intervalos.data[1].coef = datos.beta1;
    return (
        <>
            <Spacer y={2} />
            <Grid.Container gap={2} >
                <Grid xs={12} md={12} justify="center">
                <Result datos={datos} />
                </Grid>
            </Grid.Container>
            <Spacer y={2} />
            <div style={{marginLeft:"2%",marginRight:"2%"}}>
                    <Card  variant="bordered">
                        <Card.Body>
                                 <TablaAnalisisConfianza datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
            </div>
        </>
    )
}
