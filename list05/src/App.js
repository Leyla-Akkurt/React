import React from "react";
import { List } from "./List";

const toDoList=[
  { title:"Make a cake"},
  { title:"Go to Gym"},
  { title:"Clean the Home"},
  { title:"Take a shower"}
];

export class App extends React.Component{


render(){
  return (
   <List todos={toDoList}/>
   
  )
}
}

