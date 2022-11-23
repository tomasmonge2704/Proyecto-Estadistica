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
                    <Table.Cell>Intercepción</Table.Cell>
                    <Table.Cell>40,39968209</Table.Cell>
                    <Table.Cell>17,64181585</Table.Cell>
                    <Table.Cell>2,28999568</Table.Cell>
                    <Table.Cell>2,28999568</Table.Cell>
                    <Table.Cell>Ej: 10</Table.Cell>
                    <Table.Cell>Ej: 10</Table.Cell>
                    <Table.Cell>Ej: 20</Table.Cell>
                    <Table.Cell>Ej: 20</Table.Cell>

                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell>X</Table.Cell>
                    <Table.Cell>Ej: 10</Table.Cell>
                    <Table.Cell>Ej: 20</Table.Cell>
                    <Table.Cell>Ej: 10</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>Ej: 10</Table.Cell>
                    <Table.Cell>Ej: 20</Table.Cell>
                    <Table.Cell>Ej: 20</Table.Cell>

                </Table.Row>
            </Table.Body>
        </Table>
    );
}
