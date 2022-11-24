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
            <Table.Column></Table.Column>
            <Table.Column>Grados de libertad</Table.Column>
            <Table.Column>Suma de cuadrados</Table.Column>
            <Table.Column>Promedio de los cuadrados</Table.Column>
            <Table.Column>F</Table.Column>
            <Table.Column>Valor crítico de F</Table.Column>
          </Table.Header>
          <Table.Body>
          
          </Table.Body>
        </Table>
      );
}