import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{
    render(){
        return(
            <>
            <p>Hello, {this.props.name} </p> 
             {
            this.props.name==="John"
            ? <Age age={this.props.age}/>
             :" "}
            
            </>
        )
    }
}