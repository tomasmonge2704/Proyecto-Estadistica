import NavBar from "@/components/navbar/navBar";
import {
  Grid,
  Text,
  Collapse,
  Container,
  Spacer,
  Badge,
  Link,
} from "@nextui-org/react";
export default function Home() {
  const confianzaList = [
    {
        title: "Estimacion de la Media Poblacional",
        href:"/ejemplos/confianza/media"
    },
    {
        title: "Estimacion del tamaño de Muestra",
        href:"/ejemplos/confianza/N"
    },
    {
        title: "Estimacion de la Proporcion Poblacional",
        href:"/ejemplos/confianza/proporcion-poblacional"
    },
    {
        title: "Estimacion de la Varianza",
        href:"/ejemplos/confianza/varianza"
    }
    ,
    {
        title: "Estimacion de la Diferencia de Medias",
        href:"/ejemplos/confianza/diferencia-medias"
    }
    ,
    {
        title: "Estimacion de la Diferencia de Proporciones",
        href:"/ejemplos/confianza/diferencia-proporciones"
    }
];
const correlacionList = [
  {
      title: "Datos con tabla X e Y",
      href:"/ejemplos/correlacion/datos"
  },
  {
      title: "Datos Incompletos (1)",
      href:"/ejemplos/correlacion/datos-incompletos"
  },
  ,
  {
      title: "Datos Incompletos (2)",
      href:"/ejemplos/correlacion/datos-incompletos1"
  },
  ,
  {
      title: "Datos Incompletos (3)",
      href:"/ejemplos/correlacion/datos-incompletos2"
  }

];
  return (
    <>
      <NavBar page={"/"} />
      <Spacer y={4} />
      <Container justify="center" css={{ textAlign: "center" }}>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Con esta Pagina
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Aprobas.
        </Text>
      </Container>
      <Spacer y={4} />
      <Container justify="center">
        <Grid.Container gap={2}>
          <Grid>
            <Collapse.Group shadow>
              <Collapse title="Probabilidad">
                <Text>Proximamente...</Text>
              </Collapse>
              <Collapse title="Intervalos de Confianza">
                  <Text
                    h1
                    size={20}
                    css={{
                      textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                  >
                    Ejemplos Practicos
                  </Text>
                  <Grid.Container gap={0.5}>
                  {confianzaList.map((item, index) => (
                    <Grid xs={12} alignItems="center" key={index}>
                      <Badge variant="dot" />
                      <Link
                        color="inherit"
                        css={{
                          minWidth: "100%",
                        }}
                        href={item.href}
                      >
                        <Text css={{ ml: "$2" }}>{item.title}</Text>
                      </Link>
                    </Grid>))}
                  </Grid.Container>
              </Collapse>
              <Collapse title="Prueba de Hipotesis">
                <Text>Proximamente...</Text>
              </Collapse>
              <Collapse title="Correlacion y regresion">
                  <Text
                    h1
                    size={20}
                    css={{
                      textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                  >
                    Ejemplos Practicos
                  </Text>
                  <Grid.Container gap={0.5}>
                  {correlacionList.map((item, index) => (
                    <Grid xs={12} alignItems="center" key={index}>
                      <Badge variant="dot" />
                      <Link
                        color="inherit"
                        css={{
                          minWidth: "100%",
                        }}
                        href={item.href}
                      >
                        <Text css={{ ml: "$2" }}>{item.title}</Text>
                      </Link>
                    </Grid>))}
                  </Grid.Container>
              </Collapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
