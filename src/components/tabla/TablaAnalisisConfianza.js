import { Table} from "@nextui-org/react";
import DropdownMenue from "./dropdownMenue";
import React from "react";
import { obtenerConfianzaBeta0, obtenerConfianzaBeta1 } from "../formulas/correlacion";
export default function TablaAnalisisConfianza({ datos }) {
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
                <Table.Column><DropdownMenue text="Inferior" datos={datos} indice={0}/></Table.Column>
                <Table.Column><DropdownMenue text="Superior" datos={datos} indice={1}/></Table.Column>
                <Table.Column><DropdownMenue text="Inferior" datos={datos} indice={2}/></Table.Column>
                <Table.Column><DropdownMenue text="Superior" datos={datos} indice={3}/></Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row key="1">
                    <Table.Cell>Ordenada al origen (𝛽⁰)</Table.Cell>
                    <Table.Cell>{(datos.beta0).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta0(datos,datos.intervalos.confianza[0]).inferior).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta0(datos,datos.intervalos.confianza[1]).superior).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta0(datos,datos.intervalos.confianza[2]).inferior).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta0(datos,datos.intervalos.confianza[3]).superior).toFixed(6)}</Table.Cell>

                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell>Pendiente (𝛽¹)</Table.Cell>
                    <Table.Cell>{(datos.beta1).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta1(datos,datos.intervalos.confianza[0]).inferior).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta1(datos,datos.intervalos.confianza[1]).superior).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta1(datos,datos.intervalos.confianza[2]).inferior).toFixed(6)}</Table.Cell>
                    <Table.Cell>{(obtenerConfianzaBeta1(datos,datos.intervalos.confianza[3]).superior).toFixed(6)}</Table.Cell>

                </Table.Row>
            </Table.Body>
        </Table>
    );
}
