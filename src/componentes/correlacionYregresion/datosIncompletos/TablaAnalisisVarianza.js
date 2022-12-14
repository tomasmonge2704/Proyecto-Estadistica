import { Table} from "@nextui-org/react";
import React from "react";
import InputNumber from "./Input";
export default function TablaAnalisisVarianza({datos}) {
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        datos = JSON.parse(sessionStorage.getItem('datos'));
        datos[name] = Number(value);
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.dispatchEvent(new Event("storage"));
    };
  return (
    <Table
    variant="bordered"
    aria-label="Example pagination  table"
    color="secondary"
    css={{
      height: "auto",
      Width: "100%",
    }}
    >
      <Table.Header>
        <Table.Column></Table.Column>
        <Table.Column>Grados de libertad</Table.Column>
        <Table.Column>Suma de cuadrados</Table.Column>
        <Table.Column>Promedio de los cuadrados</Table.Column>
      </Table.Header>
      <Table.Body>
      <Table.Row key="1">
            <Table.Cell>Regresión</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell><InputNumber key={datos.sumaDeCuadradosRegresion} value={datos.sumaDeCuadradosRegresion ? (datos.sumaDeCuadradosRegresion).toFixed(5) : ""} name="sumaDeCuadradosRegresion" onChange={(e) => onChangeInput(e)}/></Table.Cell>
            <Table.Cell><InputNumber key={datos.promedioDeCuadradosRegresion} value={datos.promedioDeCuadradosRegresion ? (datos.promedioDeCuadradosRegresion).toFixed(5) : ""} name="promedioDeCuadradosRegresion" onChange={(e) => onChangeInput(e)}/></Table.Cell>
        </Table.Row>
        <Table.Row key="2">
            <Table.Cell>Residuos</Table.Cell>
            <Table.Cell><InputNumber key={datos.N2} value={datos.N2} name="N2" onChange={(e) => onChangeInput(e)}/></Table.Cell>
            <Table.Cell><InputNumber key={datos.sumaDeCuadradosResiduos} value={datos.sumaDeCuadradosResiduos ? (datos.sumaDeCuadradosResiduos).toFixed(5) : ""} name="sumaDeCuadradosResiduos" onChange={(e) => onChangeInput(e)}/></Table.Cell>
            <Table.Cell><InputNumber key={datos.promedioDeCuadradosResiduos} value={datos.promedioDeCuadradosResiduos ? (datos.promedioDeCuadradosResiduos).toFixed(5) : ""} name="promedioDeCuadradosResiduos" onChange={(e) => onChangeInput(e)}/></Table.Cell>
        </Table.Row>
        <Table.Row key="3">
            <Table.Cell>Total</Table.Cell>
            <Table.Cell><InputNumber key={datos.N1} value={datos.N1} name="N1" onChange={(e) => onChangeInput(e)}/></Table.Cell>
            <Table.Cell><InputNumber key={datos.sumaDeCuadradosTotal} value={datos.sumaDeCuadradosTotal ? (datos.sumaDeCuadradosTotal).toFixed(5) : ""} name="sumaDeCuadradosTotal" onChange={(e) => onChangeInput(e)}/></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
