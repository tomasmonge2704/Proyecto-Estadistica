import Result from "./result"
import { Spacer,Grid,Card,Text } from "@nextui-org/react";
import TablaAnalisisConfianza from "./TablaAnalisisConfianza";
import TablaAnalisisVarianza from "./TablaAnalisisVarianza";
import TablaTestIndividuales from "./TablaTestIndividuales";
import TablaAnalisisResiduales from "./TablaAnalisisResiduales";
import TablaAnalisisVarianza2 from "./TablaAnalisisVarianza2";
export default function Logica({datos}) {
        if(datos.beta0) datos.intervalos.data[0].coef = datos.beta0;
        if(datos.beta1) datos.intervalos.data[1].coef = datos.beta1;
        if(datos.Rho) datos.RhoCuadrado = (Math.pow(datos.Rho,2) * 100).toFixed(0) + "%";
        if(datos.N1 && !datos.N) datos.N = datos.N1 + 1;
        if(datos.N2 && !datos.N) datos.N = datos.N2 + 2;
        if( datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosRegresion) datos.sumaDeCuadradosResiduos = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosRegresion;
        if( datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosResiduos) datos.sumaDeCuadradosRegresion = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosResiduos;
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
                    <Card  variant="bordered">
                        <Card.Body>
                        <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                      }}
                                weight="bold">Test Individuales</Text>
                                 <TablaTestIndividuales datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
                    <Card  variant="bordered">
                        <Card.Body>
                        <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                    }}
                                weight="bold">ANOVA</Text>
                                 <TablaAnalisisVarianza datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
            </div>
        </>
    )
}
