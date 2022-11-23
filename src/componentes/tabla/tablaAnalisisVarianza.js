import { Table, Input} from "@nextui-org/react";
import React from "react";

export default function TablaAnalisisVarianza({datos}) {
    console.log(datos)
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
        <Table.Column>F</Table.Column>
        <Table.Column>Valor crítico de F</Table.Column>
      </Table.Header>
      <Table.Body>
      <Table.Row key="1">
            <Table.Cell>Regresión</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
            <Table.Cell>Residuos</Table.Cell>
            <Table.Cell>{datos.N !== 0 ? datos.N - 2 : "x"}</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row key="3">
            <Table.Cell>Total</Table.Cell>
            <Table.Cell>{datos.N !== 0 ? datos.N - 1 : "x"}</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
