import FormDatos from "./formDatos";
import Logica from "./logica";
import { useState, useEffect } from "react";
import { Spacer, Card, Text, Grid,Container } from "@nextui-org/react";
import TablaAnalisisVarianza from "@/components/tabla/tablaAnalisisVarianza";
import TablaAnalisisVarianza2 from "@/components/tabla/tablaAnalisisVarianza2";
import TablaAnalisisConfianza from "@/components/tabla/TablaAnalisisConfianza";
import TablaTestIndividuales from "@/components/tabla/tablaTestIndividuales";
import TablaAnalisisResiduales from "@/components/tabla/tablaAnalisisResiduales";
import NavBar from "@/components/navbar/navBar";
import GraficoCorrelacion from "@/components/graficos/correlacion";
export default function GetDatosXeY() {
  const [datos, setDatos] = useState({
    distribucion: "Normal",
    intervalos: { confianza: [95, 95, 99, 99] },
    valores: [
      {
        valorX: 2,
        valorY: 14,
        id: 1,
        Ysombrero: 14.938461538461537,
        Residuo: -0.9384615384615369,
        ResiduoStandar: 0.8807100591715947,
      },
      {
        valorX: 3,
        valorY: 20,
        id: 2,
        Ysombrero: 20.092307692307692,
        Residuo: -0.09230769230769198,
        ResiduoStandar: 0.008520710059171537,
      },
      {
        valorX: 5,
        valorY: 32,
        id: 3,
        Ysombrero: 30.4,
        Residuo: 1.6000000000000014,
        ResiduoStandar: 2.5600000000000045,
      },
      {
        valorX: 7,
        valorY: 42,
        id: 4,
        Ysombrero: 40.70769230769231,
        Residuo: 1.2923076923076877,
        ResiduoStandar: 1.6700591715976212,
      },
      {
        valorX: 8,
        valorY: 44,
        id: 5,
        Ysombrero: 45.86153846153846,
        Residuo: -1.8615384615384585,
        ResiduoStandar: 3.4653254437869707,
      },
      { valorX: 25, valorY: 152, id: 6 },
    ],
    N: 6,
    Rho: 0.9938421564823098,
    RhoCuadrado: "98.77%",
    RhoCuadradoAjustado: 0.9836296426685439,
    beta1: 5.153846153846154,
    beta0: 4.6307692307692285,
    ErrorTipico: 1.691608247065043,
    sumaDeCuadrados: {
      regresion: 690.6153846153846,
      residuos: 8.584615384615361,
      total: 699.2,
    },
    promedioDeCuadrados: {
      regresion: 690.6153846153846,
      residuos: 2.8615384615384536,
      total: 174.8,
    },
    F: 241.34408602150606,
    ValorCriticoF: 0.0005795291372527878,
    desvioBeta0: 1.8231256079185898,
    desvioBeta1: 0.3317516715822746,
    Tbeta0: 2.540016557639188,
    Tbeta1: 15.535253007965622,
    ProbabilidadBeta0: 0.08467830035392017,
    ProbabilidadBeta1: 0.0005795291372887008,
  });
  useEffect(() => {
    sessionStorage.setItem("datos", JSON.stringify(datos));
    window.addEventListener("storage", () => {
      const datosStorage = JSON.parse(sessionStorage.getItem("datos"));
      setDatos(datosStorage);
    });
  }, []);

  return (
    <>
      <NavBar page={"/correlacion"} />
      <Container justify="center" css={{ textAlign: "center" }}>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Enunciado
        </Text>
        <Text>
        Cinco niños de 2, 3, 5, 7 y 8 años de edad pesan, respectivamente, 14, 20, 32, 42 y 44 kilos.
        </Text>
        <Text>
        Hallar la ecuación de la recta de regresión de la edad sobre el peso.
        </Text>
      </Container>
      <Spacer y={2} />
      <Grid.Container gap={2}>
        <Grid xs={12} md={6} justify="center">
          <FormDatos datos={datos} />
        </Grid>
        <Grid xs={12} md={6} justify="center">
          <Logica datos={datos} />
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
      {datos.valores.length > 1 ? (
        <div style={{ marginLeft: "2%", marginRight: "2%" }}>
          <GraficoCorrelacion datos={datos} />
          <Spacer y={2} />
          <Card variant="bordered">
            <Card.Body>
              <TablaAnalisisConfianza datos={datos} />
            </Card.Body>
          </Card>
          <Spacer y={2} />
          <Card variant="bordered">
            <Card.Body>
              <Text
                h1
                size={40}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  textAlign: "center",
                }}
                weight="bold"
              >
                Test Individuales
              </Text>
              <TablaTestIndividuales datos={datos} />
            </Card.Body>
          </Card>
          <Spacer y={2} />
          <Card variant="bordered">
            <Card.Body>
              <Text
                h1
                size={40}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  textAlign: "center",
                }}
                weight="bold"
              >
                ANOVA
              </Text>
              <TablaAnalisisVarianza datos={datos} />
            </Card.Body>
          </Card>
          <Spacer y={2} />
          <Card variant="bordered">
            <Card.Body>
              <Text
                h1
                size={40}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  textAlign: "center",
                }}
                weight="bold"
              >
                Test de significacion Global
              </Text>
              <TablaAnalisisVarianza2 datos={datos} />
            </Card.Body>
          </Card>
          <Spacer y={2} />
          <Card variant="bordered">
            <Card.Body>
              <Text
                h1
                size={40}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  textAlign: "center",
                }}
                weight="bold"
              >
                Analisis de los residuales
              </Text>
              <TablaAnalisisResiduales datos={datos} />
            </Card.Body>
          </Card>
          <Spacer y={4} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
