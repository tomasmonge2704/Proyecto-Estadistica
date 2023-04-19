import { Table} from "@nextui-org/react";
import React from "react";
import InputNumber from "./Input";
export default function TablaAnalisisVarianza2({datos}) {
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        datos = JSON.parse(sessionStorage.getItem('datos'));
        datos[name] = Number(value)
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
        <Table.Column>Valor Observado</Table.Column>
        <Table.Column>P-value</Table.Column>
      </Table.Header>
      <Table.Body>
      <Table.Row key="1">
            <Table.Cell><InputNumber key={datos.F} value={datos.F ? (datos.F).toFixed(5) : ""} name="F" onChange={(e) => onChangeInput(e)}/></Table.Cell>
            <Table.Cell><InputNumber key={datos.ValorCriticoF} value={datos.ValorCriticoF ? (datos.ValorCriticoF).toFixed(5) : ""} name="ValorCriticoF" onChange={(e) => onChangeInput(e)}/></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
