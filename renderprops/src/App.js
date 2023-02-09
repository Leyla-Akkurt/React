import React from "react";
import { List } from "./List";


export class App extends React.Component{


render(){
  
  return (
  
  <List render={items=>{
                  return items.map(
                  (todo,index)=>
                        <li key={index}>{todo.title}</li>);
                   }} />
   
   
    
  )
}

}

