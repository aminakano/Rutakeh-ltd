import * as typeformEmbed from "@typeform/embed";
import { Component } from "react";
const url = "https://rutakeh.typeform.com/to/BSebhs";

class Form extends Component{

  componentDidMount(){
    const embedElement = document.getElementById("typeform");
    typeformEmbed.makeWidget(embedElement, url);
  }

  render(){
    return (
      <div id="typeform"></div>
    )
  }
}

export default Form;