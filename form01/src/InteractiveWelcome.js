import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state={
        username:""
    }
    handleOnChangeInput= (event)=>{
        
        this.setState(
            {username:event.target.value}
            )
    }

    render(){
        return (
            <div>
                 <input name="username" onChange={this.handleOnChangeInput}/>
                 <Welcome name={this.state.username}/>
                
            </div>
        )
    }
}

