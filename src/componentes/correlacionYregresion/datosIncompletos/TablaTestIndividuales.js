import { Table} from "@nextui-org/react";
import React from "react";
import InputNumber from "./Input";
export default function TablaTestIndividuales({datos}){
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        datos[name] = Number(value)
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.dispatchEvent(new Event("storage"));
    };
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
                    <Table.Cell>{datos.desvioBeta0 ? (datos.desvioBeta0).toFixed(6) : <InputNumber name="desvioBeta0" onChange={(e) => onChangeInput(e)}/>}</Table.Cell>
                    <Table.Cell>{datos.Tbeta0 ? (datos.Tbeta0).toFixed(6) : <InputNumber name="Tbeta0" onChange={(e) => onChangeInput(e)}/>}</Table.Cell>
                    <Table.Cell>{datos.ProbabilidadBeta0 ? (datos.ProbabilidadBeta0).toFixed(6) : <InputNumber name="ProbabilidadBeta0" onChange={(e) => onChangeInput(e)}/>}</Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell>Pendiente (𝛽¹)</Table.Cell>
                    <Table.Cell>{datos.desvioBeta1 ? (datos.desvioBeta1).toFixed(6) : <InputNumber name="desvioBeta1" onChange={(e) => onChangeInput(e)}/>}</Table.Cell>
                    <Table.Cell>{datos.Tbeta1 ? (datos.Tbeta1).toFixed(6) : <InputNumber name="Tbeta1" onChange={(e) => onChangeInput(e)}/>}</Table.Cell>
                    <Table.Cell>{datos.ProbabilidadBeta1 ? (datos.ProbabilidadBeta1).toFixed(6) : <InputNumber name="ProbabilidadBeta1" onChange={(e) => onChangeInput(e)}/>}</Table.Cell>
                </Table.Row>
          </Table.Body>
        </Table>
      );
}