import { Table} from "@nextui-org/react";
import DropdownMenue from "./dropdownMenue";
import React from "react";

export default function TablaAnalisisVarianza2({ datos }) {
  
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
                <Table.Column>Coeficientes</Table.Column>
                <Table.Column>Error típico</Table.Column>
                <Table.Column>Estadístico t</Table.Column>
                <Table.Column>Probabilidad</Table.Column>
                <Table.Column><DropdownMenue text="Inferior" numero=" 95%"/></Table.Column>
                <Table.Column><DropdownMenue text="Superior" numero=" 95%"/></Table.Column>
                <Table.Column><DropdownMenue text="Inferior" numero=" 99%"/></Table.Column>
                <Table.Column><DropdownMenue text="Superior" numero=" 99%"/></Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row key="1">
                    <Table.Cell>Ordenada al origen (𝛽⁰)</Table.Cell>
                    <Table.Cell>{(datos.beta0).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.desvioBeta0).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.Tbeta0).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.ProbabilidadBeta0).toFixed(6)}</Table.Cell>
                    <Table.Cell>x</Table.Cell>
                    <Table.Cell>x</Table.Cell>
                    <Table.Cell>x</Table.Cell>
                    <Table.Cell>x</Table.Cell>

                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell>Pendiente (𝛽¹)</Table.Cell>
                    <Table.Cell>{(datos.beta1).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.desvioBeta1).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.Tbeta1).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(datos.ProbabilidadBeta1).toFixed(6)}</Table.Cell>
                    <Table.Cell>x</Table.Cell>
                    <Table.Cell>x</Table.Cell>
                    <Table.Cell>x</Table.Cell>
                    <Table.Cell>x</Table.Cell>

                </Table.Row>
            </Table.Body>
        </Table>
    );
}
