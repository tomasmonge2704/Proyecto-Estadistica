import { Table} from "@nextui-org/react";
import React from "react";

export default function TablaAnalisisVarianza({datos}) {
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
            <Table.Cell>{(datos.sumaDeCuadrados.regresion).toFixed(5)}</Table.Cell>
            <Table.Cell>{(datos.promedioDeCuadrados.regresion).toFixed(5)}</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
            <Table.Cell>Residuos</Table.Cell>
            <Table.Cell>{datos.N - 2}</Table.Cell>
            <Table.Cell>{(datos.sumaDeCuadrados.residuos).toFixed(5)}</Table.Cell>
            <Table.Cell>{(datos.promedioDeCuadrados.residuos).toFixed(5)}</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
            <Table.Cell>Total</Table.Cell>
            <Table.Cell>{datos.N - 1}</Table.Cell>
            <Table.Cell>{(datos.sumaDeCuadrados.total).toFixed(5)}</Table.Cell>
            <Table.Cell>{(datos.promedioDeCuadrados.total).toFixed(5)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
