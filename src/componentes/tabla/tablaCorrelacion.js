import { Table} from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "./DeleteIcon";
import { IconButton } from "./IconButton";

export default function TablaDatosCorrelacion({valores}) {
  return (
    <Table
    isHoverable variant="bordered"
      aria-label="Example pagination  table"
      color="secondary"
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
        {valores.length !== 0 ? (<Table.Body>
          {valores.map((item, index) => (
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
          ))}
        </Table.Body>):(
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Ej: 14</Table.Cell>
            <Table.Cell>Ej: 22</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row >
          <Table.Row key="3">
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Ej: 13</Table.Cell>
            <Table.Cell>Ej: 19</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          <Table.Row key="5">
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          <Table.Row key="6">
            <Table.Cell>6</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          <Table.Row key="7">
            <Table.Cell>7</Table.Cell>
            <Table.Cell>Ej: 10</Table.Cell>
            <Table.Cell>Ej: 20</Table.Cell>
            <Table.Cell>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
          )}
      <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={6} />
    </Table>
  );
}
