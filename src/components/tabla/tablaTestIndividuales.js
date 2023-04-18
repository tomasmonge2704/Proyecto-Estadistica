import { Table} from "@nextui-org/react";
import React from "react";
export default function TablaTestIndividuales({datos}){
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
            <Table.Column>Error típico</Table.Column>
            <Table.Column>Estadístico t</Table.Column>
            <Table.Column>Probabilidad</Table.Column>
          </Table.Header>
          <Table.Body>
          <Table.Row key="1">
                    <Table.Cell>Ordenada al origen (𝛽⁰)</Table.Cell>
                    <Table.Cell>{(datos.desvioBeta0).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.Tbeta0).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.ProbabilidadBeta0).toFixed(6)}</Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell>Pendiente (𝛽¹)</Table.Cell>
                    <Table.Cell>{(datos.desvioBeta1).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.Tbeta1).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.ProbabilidadBeta1).toFixed(6)}</Table.Cell>
                </Table.Row>
          </Table.Body>
        </Table>
      );
}