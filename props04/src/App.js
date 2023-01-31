import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component{
render(){
  return (
    //except the string props we should use {} to embed the variable
    <Welcome name={<strong>Ali</strong>} age={35}/>
  )
}
}

