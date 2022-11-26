import { Spacer, Card, Text,Grid,Input,Button } from "@nextui-org/react";
import React from "react";
import TablaDatosCorrelacion from "../tabla/tablaCorrelacion";
export default function FormDatos({ datos }) {
    function updateValueMedia(e) {
        let nuevoDato = { valorX: Number(document.getElementById('valorX').value),valorY: Number(document.getElementById('valorY').value)}
        nuevoDato.id = datos.valores.length + 1
        datos.valores.push(nuevoDato)
        datos.N = datos.valores.length
        sessionStorage.setItem('datos', JSON.stringify(datos))
        window.dispatchEvent(new Event("storage"));
      }
    return (
        <Card isHoverable variant="bordered" css={{ mw: "650px" }} className="cardConfianza">
            <Card.Body>
                <Text h1 size={40}
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        textAlign: "center"
                    }}
                    weight="bold">Datos de la Muestra</Text>
                <Spacer y={1} />
                <Grid.Container gap={2} justify="center" alignItems="center">

          <Grid xs={6} justify="center" alignItems="center">
            <Input label="Valor X" placeholder="Ej: 100" type="number" size="lg" id="valorX" />
          </Grid>
          <Grid xs={6} justify="center" alignItems="center">
            <Input label="Valor Y" placeholder="Ej: 200" type="number" size="lg" id="valorY" />
          </Grid>
          <Grid xs={12}>
            <Button shadow color="success" css={{width:"100%"}} auto onClick={updateValueMedia}>
              Agregar Valores
            </Button>
          </Grid>
        </Grid.Container>
        <Spacer y={1} />
              <TablaDatosCorrelacion valores={datos.valores}/>
            </Card.Body>
        </Card>
    )

}