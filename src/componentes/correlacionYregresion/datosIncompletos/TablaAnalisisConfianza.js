import { Table } from "@nextui-org/react";
import DropdownMenue from "../../tabla/dropdownMenue";
import InputNumber from "./Input";
import React from "react";
export default function TablaAnalisisConfianza({ datos }) {
    const [data, setData] = React.useState(datos.intervalos.data)
    const onChangeInput = (e, index) => {
        const copy = [...data];
        const { name, value } = e.target;
        const element = copy[index];
        element[name] = Number(value);
        setData(copy);
        datos.intervalos.data = data
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.dispatchEvent(new Event("storage"));
    };
    console.log(datos.intervalos.data)
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
                <Table.Column><DropdownMenue text="Inferior" datos={datos} indice={0} /></Table.Column>
                <Table.Column><DropdownMenue text="Superior" datos={datos} indice={1} /></Table.Column>
                <Table.Column><DropdownMenue text="Inferior" datos={datos} indice={2} /></Table.Column>
                <Table.Column><DropdownMenue text="Superior" datos={datos} indice={3} /></Table.Column>
            </Table.Header>
            <Table.Body>
                {datos.intervalos.data.map(({ row, coef, inf1, sup1, inf2, sup2 }, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{row}</Table.Cell>
                        <Table.Cell>{coef ? coef : <InputNumber name="coef" onChange={(e) => onChangeInput(e, index)} />}</Table.Cell>
                        <Table.Cell>{inf1 ? inf1 : <InputNumber name="inf1" onChange={(e) => onChangeInput(e, index)} />}</Table.Cell>
                        <Table.Cell>{sup1 ? sup1 : <InputNumber name="sup1" onChange={(e) => onChangeInput(e, index)} />}</Table.Cell>
                        <Table.Cell>{inf2 ? inf2 : <InputNumber name="inf2" onChange={(e) => onChangeInput(e, index)} />}</Table.Cell>
                        <Table.Cell>{sup2 ? sup2 : <InputNumber name="sup2" onChange={(e) => onChangeInput(e, index)} />}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}