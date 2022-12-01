import Result from "./result"
import { Spacer,Grid,Card,Text } from "@nextui-org/react";
import TablaAnalisisConfianza from "./TablaAnalisisConfianza";
import TablaAnalisisVarianza from "./TablaAnalisisVarianza";
import TablaTestIndividuales from "./TablaTestIndividuales";
import TablaAnalisisResiduales from "./TablaAnalisisResiduales";
import TablaAnalisisVarianza2 from "./TablaAnalisisVarianza2";
import { calcularBeta0, obtenerConfianzaBeta0, obtenerConfianzaBeta1, obtenerEstadisticoT } from "./formulas";
export default function Logica({datos}) {
        if(datos.beta0) datos.intervalos.data[0].coef = datos.beta0;
        if(datos.beta1) datos.intervalos.data[1].coef = datos.beta1;
        if(datos.Rho) datos.RhoCuadrado = (Math.pow(datos.Rho,2) * 100).toFixed(0) + "%";
        if(datos.ErrorTipico) datos.promedioDeCuadradosResiduos = Math.pow(datos.ErrorTipico,2);
        if(datos.N1 && !datos.N) datos.N = datos.N1 + 1;
        if(datos.N2 && !datos.N) datos.N = datos.N2 + 2;
        if(datos.desvioBeta1 && datos.Tbeta1) datos.beta1 = datos.desvioBeta1 * datos.Tbeta1;
        if(datos.desvioBeta0 && datos.Tbeta0) datos.beta0 = datos.desvioBeta0 * datos.Tbeta0;
        if( datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosRegresion) datos.sumaDeCuadradosResiduos = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosRegresion;
        if( datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosResiduos) datos.sumaDeCuadradosRegresion = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosResiduos;
        if( !datos.sumaDeCuadradosRegresion && datos.promedioDeCuadradosRegresion) datos.sumaDeCuadradosRegresion = datos.promedioDeCuadradosRegresion / 1;
        if( !datos.sumaDeCuadradosResiduos && datos.promedioDeCuadradosResiduos) datos.sumaDeCuadradosRegresion = datos.promedioDeCuadradosResiduos / (datos.N - 2);
        if( !datos.promedioDeCuadradosRegresion && datos.sumaDeCuadradosRegresion) datos.promedioDeCuadradosRegresion = datos.sumaDeCuadradosRegresion;
        //estadistico T
        if(!datos.Tbeta0 && datos.ProbabilidadBeta0 && datos.N) datos.Tbeta0 = obtenerEstadisticoT(datos.ProbabilidadBeta0,datos.N - 2);
        if(!datos.Tbeta1 && datos.ProbabilidadBeta1 && datos.N) datos.Tbeta1 = obtenerEstadisticoT(datos.ProbabilidadBeta1,datos.N - 2);
        // error tipico
        if(!datos.desvioBeta0 && datos.Tbeta0 && datos.beta0) datos.desvioBeta0 = datos.beta0 / datos.Tbeta0;
        //beta0
        if(!datos.beta0 && datos.intervalos.data[0].inf1 && datos.intervalos.data[0].sup1){
            datos.beta0 = calcularBeta0(datos.intervalos.data[0].inf1,datos.intervalos.data[0].sup1)
        }
        // intervalos
        if(!datos.intervalos.data[1].inf1 && datos.intervalos.data[1].inf2){
            const res = obtenerConfianzaBeta1(datos,datos.intervalos.confianza,datos.intervalos.data[1].inf2);
            datos.intervalos.data[1].inf1 = res.inferior;
            datos.intervalos.data[1].sup1 = res.superior;
        }
        if(!datos.intervalos.data[0].inf2 && datos.intervalos.data[0].inf1){
            const res = obtenerConfianzaBeta0(datos,datos.intervalos.confianza,datos.intervalos.data[0].inf1);
            datos.intervalos.data[0].inf2 = res.inferior;
            datos.intervalos.data[0].sup2 = res.superior;
        } 
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
                    <Card  variant="bordered">
                        <Card.Body>
                        <Text h1 size={40}
                                     css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        textAlign:"center"
                                    }}
                                weight="bold">Test de significacion Global</Text>
                                 <TablaAnalisisVarianza2 datos={datos} />
                        </Card.Body>
                    </Card>
                    <Spacer y={2} />
            </div>
        </>
    )
}
