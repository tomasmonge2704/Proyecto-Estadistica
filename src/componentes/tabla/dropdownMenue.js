import { Dropdown } from "@nextui-org/react";
import React from "react";
export default function DropdownMenue({text,numero}){
    const [selected, setSelected] = React.useState(new Set([text + numero]));
    const selectedValue = React.useMemo(
      () => Array.from(selected).join(", ").replaceAll("_", " "),
      [selected]
    );
    return(
        <Dropdown>
        <Dropdown.Button flat color="secondary" light css={{ tt: "capitalize" }}>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="secondary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
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
