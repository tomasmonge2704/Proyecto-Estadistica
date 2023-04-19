import Result from "./result"
import { Spacer,Grid,Card,Text } from "@nextui-org/react";
import TablaAnalisisConfianza from "./TablaAnalisisConfianza";
import TablaAnalisisVarianza from "./TablaAnalisisVarianza";
import TablaTestIndividuales from "./TablaTestIndividuales";
import TablaAnalisisVarianza2 from "./TablaAnalisisVarianza2";
import NavBar from "@/components/navbar/navBar";

export default function Contenedor({datos}){
    return(
        <>
            <NavBar page={"/correlacion"}/>        
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