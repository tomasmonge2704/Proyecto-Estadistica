import { Input, Spacer, Button,Grid } from "@nextui-org/react";
import React from "react";
import TablaDatos from "./tablaDatos";
export default function ModalTipoDeDatos() {
  const [valores, setValores] = React.useState([]);
  function updateValueMedia(e) {
    const datos = JSON.parse(sessionStorage.getItem('datos'));
    if(datos.valores == undefined){
      datos.valores = []
    }
    const nuevoDato = {value:Number(document.getElementById('valor').value)}
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
      <Spacer y={2} />
      <TablaDatos valores={valores}/>
    </div>
  );
}
