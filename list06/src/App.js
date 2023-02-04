import React from "react";
import { List } from "./List";

const toDoList=[
  { id:0,title:"Make a cake"},
  { id:1,title:"Go to Gym"},
  { id:2,title:"Clean the Home"},
  { id:3,title:"Take a shower"}
];

export class App extends React.Component{


render(){
  return (
   <List todos={toDoList}/>
   
  )
}
}

