import { Dropdown } from "@nextui-org/react";
import React from "react";
export default function DropdownMenue({text,datos,indice}){
    const [selected, setSelected] = React.useState(text + " " + datos.intervalos[indice] + "%");
    function updateIntervalo(e){
      datos.intervalos[indice] = Number(Object.entries(e)[0][1].match(/(\d+)/g)[0])
      setSelected(Object.entries(e)[0][1])
      sessionStorage.setItem('datos', JSON.stringify(datos))
      window.dispatchEvent(new Event("storage"));
    }
    return(
        <Dropdown>
        <Dropdown.Button flat color="secondary" light css={{ tt: "capitalize" }}>
          {selected}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="secondary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={updateIntervalo}
        >
          <Dropdown.Item key={text + " 95%"}>{text + " 95%"}</Dropdown.Item>
          <Dropdown.Item key={text + " 96%"}>{text + " 96%"}</Dropdown.Item>
          <Dropdown.Item key={text + " 97%"}>{text + " 97%"}</Dropdown.Item>
          <Dropdown.Item key={text + " 98%"}>{text + " 98%"}</Dropdown.Item>
          <Dropdown.Item key={text + " 99%"}>{text + " 99%"}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
}
