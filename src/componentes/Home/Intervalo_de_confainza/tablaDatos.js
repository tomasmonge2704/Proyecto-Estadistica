import {Table,Tooltip} from "@nextui-org/react";
import React from "react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { IconButton } from "./IconButton";

export default function TablaDatos({valores}) {
  return (
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          Width: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>Xi</Table.Column>
          <Table.Column>Xi2</Table.Column>
          <Table.Column></Table.Column>
          <Table.Column></Table.Column>
        </Table.Header>
        <Table.Body>
          {
            valores.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>{item}</Table.Cell>
                <Table.Cell>{Math.pow(item, 2)}</Table.Cell>
                <Table.Cell><Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user")}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip></Table.Cell>
              <Table.Cell><Tooltip content="Delete user">
                <IconButton onClick={() => console.log("Delete user")}>
                  <DeleteIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip></Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
  );
}
