import { Table} from "@nextui-org/react";
import React from "react";
export default function TablaAnalisisResiduales({datos}){
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
            <Table.Column>Observación</Table.Column>
            <Table.Column>Pronóstico para Y</Table.Column>
            <Table.Column>Residuos</Table.Column>
            <Table.Column>Residuos estándares</Table.Column>
          </Table.Header>
          <Table.Body>
          {datos.valores.map((item, index) => (
            <Table.Row key={`${index + 1}`}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{(item.Ysombrero).toFixed(6)}</Table.Cell>
              <Table.Cell>{(item.Residuo).toFixed(6)}</Table.Cell>
              <Table.Cell>{(item.ResiduoStandar).toFixed(6)}</Table.Cell>
            </Table.Row>
          ))}
          </Table.Body>
        </Table>
      );
}