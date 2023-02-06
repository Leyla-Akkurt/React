import React,{Component} from "react";
import {Container} from "./Container"
import { Welcome } from "./Welcome";

export class App extends Component{
    render(){
        return (
            
            <Container>
            <Welcome name="Leyla" age={32}/>
            <p>You are almost finish the exercises</p>
            </Container>
            
        )
    }
}