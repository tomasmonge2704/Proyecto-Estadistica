import { Table, Input} from "@nextui-org/react";
import React from "react";

export default function TablaAnalisisVarianza2({datos}) {
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
            <Table.Cell>{(datos.F).toFixed(5)}</Table.Cell>
            <Table.Cell>{(datos.ValorCriticoF).toFixed(5)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
