import { Table} from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "./DeleteIcon";
import { IconButton } from "./IconButton";

export default function TablaDatosCorrelacion({valores}) {
  return (
    <Table
    isHoverable variant="bordered"
      aria-label="Example pagination  table"
      css={{
        height: "auto",
        Width: "100%",
      }}
      
    >
      <Table.Header>
        <Table.Column></Table.Column>
        <Table.Column>X</Table.Column>
        <Table.Column>Y</Table.Column>
        <Table.Column></Table.Column>
      </Table.Header>
      <Table.Body>
        {valores.length !== 0 ? (valores.map((item, index) => (
            <Table.Row key={`${index + 1}`}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{item.valorX}</Table.Cell>
              <Table.Cell>{item.valorY}</Table.Cell>
              <Table.Cell>
                <IconButton onClick={async () => {
                  const datos = await JSON.parse(sessionStorage.getItem('datos')); 
                  datos.valores = datos.valores.filter(e => e.id !== item.id);
                  sessionStorage.setItem('datos', JSON.stringify(datos));
                  window.dispatchEvent(new Event("storage"));
                  }}>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))):(<Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
  );
}
