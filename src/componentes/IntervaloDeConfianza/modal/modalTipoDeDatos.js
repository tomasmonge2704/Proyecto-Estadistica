import { Input, Spacer, Button, Grid,Text } from "@nextui-org/react";
import React from "react";
import TablaDatos from "../tabla/tablaDatos";
export default function ModalTipoDeDatos({ datos }) {
  function updateValueMedia(e) {
    let nuevoDato = 0
    if(datos.tipoDeValores == "Agrupados en intervalos"){
      nuevoDato = { value: (Number(document.getElementById('valor1').value) + Number(document.getElementById('valor2').value)) / 2,frecuencia:Number(document.getElementById('valor3').value)}
    }else{
      nuevoDato = { value: Number(document.getElementById('valor').value),frecuencia:1 }
    }
    nuevoDato.id = datos.valores.length + 1
    datos.valores.push(nuevoDato)
    datos.N = datos.valores.length
    sessionStorage.setItem('datos', JSON.stringify(datos))
    window.dispatchEvent(new Event("storage"));
  }
  return (
    <div css={{
      Width: "100%",
    }}>
      {datos.tipoDeValores !== "Agrupados en intervalos" ? (
        <div style={{display:"grid"}}>
            <Input label="Agregar Dato" placeholder="Ej: 9" fullWidth type="number" size="lg" id="valor"/>
            <Spacer y={1}/>
            <Button shadow color="success" fullWidth onClick={updateValueMedia}>
              Agregar Valores
            </Button>
        </div>
      ) : (
        <Grid.Container gap={2} justify="center" alignItems="center">

          <Grid xs={6}>
            <Input label="Valor Minimo" placeholder="Ej: 100" type="number" size="lg" id="valor1" />
          </Grid>
          <Grid xs={6}>
            <Input label="Valor Max" placeholder="Ej: 200" type="number" size="lg" id="valor2" />
          </Grid>
          <Grid xs={12}>
            <Input label="Frecuencia" placeholder="Ej: 3" type="number" fullWidth size="lg" id="valor3"/>
          </Grid>
          <Grid xs={12}>
            <Button shadow color="success" css={{width:"100%"}} auto onClick={updateValueMedia}>
              Agregar Valores
            </Button>
          </Grid>
        </Grid.Container>
      )}

      <Spacer y={2} />
      <TablaDatos valores={datos.valores} />
    </div>
  );
}
