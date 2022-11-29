import { Table,Input} from "@nextui-org/react";
import DropdownMenue from "../../tabla/dropdownMenue";
import React from "react";

import { obtenerConfianzaBeta0,obtenerConfianzaBeta1 } from "../formulas";
export default function TablaAnalisisConfianza({ datos }) {
    return (
        <Table
            variant="bordered"
            aria-placeholder="Example pagination  table"
            color="secondary"
            css={{
                height: "auto",
                Width: "100%"    
                }}
        >
            <Table.Header>
                <Table.Column></Table.Column>
                <Table.Column>Coeficientes</Table.Column>
                <Table.Column><DropdownMenue text="Inferior" datos={datos} indice={0}/></Table.Column>
                <Table.Column><DropdownMenue text="Superior" datos={datos} indice={1}/></Table.Column>
                <Table.Column><DropdownMenue text="Inferior" datos={datos} indice={2}/></Table.Column>
                <Table.Column><DropdownMenue text="Superior" datos={datos} indice={3}/></Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row key="1">
                    <Table.Cell>Ordenada al origen (𝛽⁰)</Table.Cell>
                    <Table.Cell contenteditable="true">{datos.beta0 ? (datos.beta0).toFixed(6) : <Input aria-describedby="insurance_header" placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta0 ? (obtenerConfianzaBeta0(datos,datos.intervalos[0]).inferior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta0 ? (obtenerConfianzaBeta0(datos,datos.intervalos[1]).superior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta0 ? (obtenerConfianzaBeta0(datos,datos.intervalos[2]).inferior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta0 ? (obtenerConfianzaBeta0(datos,datos.intervalos[3]).superior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell>Pendiente (𝛽¹)</Table.Cell>
                    <Table.Cell>{datos.beta1 ? (datos.beta1).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta1 ? (obtenerConfianzaBeta1(datos,datos.intervalos[0]).inferior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta1 ? (obtenerConfianzaBeta1(datos,datos.intervalos[1]).superior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta1 ? (obtenerConfianzaBeta1(datos,datos.intervalos[2]).inferior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>
                    <Table.Cell>{datos.beta1 ? (obtenerConfianzaBeta1(datos,datos.intervalos[3]).superior).toFixed(6) : <Input placeholder="Number" type="number"/>}</Table.Cell>

                </Table.Row>
            </Table.Body>
        </Table>
    );
}