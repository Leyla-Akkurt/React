import React from "react";


export class Welcome extends React.Component{
    render(){
        return(
            <>
            <p>Hello, {this.props.name} </p>
           
            {this.props.age>18 && <p>Your age is {this.props.age}</p>}
           
            
            
            </>
        )
    }
}