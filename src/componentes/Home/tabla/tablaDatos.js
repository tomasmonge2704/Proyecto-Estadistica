import { Table} from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "./DeleteIcon";
import { IconButton } from "./IconButton";

export default function TablaDatos({valores}) {
  if(valores !== []){
    valores = JSON.parse(sessionStorage.getItem('datos')).valores
  }
  if(valores == undefined){
    valores = []
  }
  return (
    <Table
    isHoverable variant="bordered"
      aria-label="Example table with static content"
      css={{
        height: "auto",
        Width: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Xi</Table.Column>
        <Table.Column>Xi²</Table.Column>
        <Table.Column></Table.Column>
      </Table.Header>
      <Table.Body>
        {
          valores.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.value}</Table.Cell>
              <Table.Cell>{Math.pow(item.value, 2)}</Table.Cell>
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
          ))}
      </Table.Body>
    </Table>
  );
}
