import React from "react";
import { Input } from "@nextui-org/react";


class InputNumber extends React.Component {
 constructor(props) {
  super(props);
  this.textInput = React.createRef();
  this.focusTextInput = this.focusTextInput.bind(this);
  this.onChange = props.onChange
  this.name = props.name
  this.value = props.value
}

focusTextInput() {
 this.textInput.current.focus();
}

render() {
 return (
   <Input type="number"ref={this.textInput}onClick={this.focusTextInput} value={this.value} name={this.name} onChange={this.onChange} size="md" aria-label="test"/>
  );
 }
}
export default InputNumber;