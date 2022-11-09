import { Input, Spacer, Button, Grid,Text } from "@nextui-org/react";
import React from "react";
import TablaDatos from "../tabla/tablaDatos";
export default function ModalTipoDeDatos({ tipoDeDato }) {
  const [valores, setValores] = React.useState([]);
  function updateValueMedia(e) {
    const datos = JSON.parse(sessionStorage.getItem('datos'));
    if (datos.valores == undefined) {
      datos.valores = []
    }
    let nuevoDato = 0
    if(tipoDeDato == "Agrupados"){
      nuevoDato = { value: (Number(document.getElementById('valor1').value) + Number(document.getElementById('valor2').value)) / 2 }
    }else{
      nuevoDato = { value: Number(document.getElementById('valor').value) }
    }
    nuevoDato.id = datos.valores.length + 1
    datos.valores.push(nuevoDato)
    setValores(datos.valores)
    sessionStorage.setItem('datos', JSON.stringify(datos))
    window.dispatchEvent(new Event("storage"));
  }
  return (
    <div css={{
      Width: "100%",
    }}>
      {tipoDeDato !== "Agrupados" ? (
        <Grid.Container gap={2} justify="center" alignItems="flex-end">

          <Grid xs={6}>
            <Input label="Agregar Dato" placeholder="Ej: 9" type="number" size="lg" id="valor" />
          </Grid>
          <Grid xs={6}>
            <Button shadow color="success" auto onClick={updateValueMedia}>
              Agregar Valores
            </Button>
          </Grid>
        </Grid.Container>
      ) : (
        <Grid.Container gap={2} justify="center" alignItems="center">

          <Grid xs={5}>
            <Input label="Valor Minimo" placeholder="Ej: 100" type="number" size="lg" id="valor1" />
          </Grid>
          <Grid xs={1}>
          <Text > - </Text>
          </Grid>
          <Grid xs={5}>
            <Input label="Valor Maximo" placeholder="200" type="number" size="lg" id="valor2" />
          </Grid>
          <Grid xs={12}>
            <Button shadow color="success" css={{width:"100%"}} auto onClick={updateValueMedia}>
              Agregar Valores
            </Button>
          </Grid>
        </Grid.Container>
      )}

      <Spacer y={2} />
      <TablaDatos valores={valores} />
    </div>
  );
}
