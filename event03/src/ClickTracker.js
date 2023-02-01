import React from "react"

export class ClickTracker extends React.Component{

    state={
       count:this.props.initialValue,
       button:"Button"
    }
    
    clickButton=(event)=>{

     this.setState(
        (state)=>{
        return{
            count:state.count+this.props.incrementBy,
            button:event.target.name
        }
    })
 }

  
render() {
    return(
        <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Press Button {this.state.button} </h1>
        <button name="Button1" onClick={this.clickButton}>First Button</button>
        <button name="Button2" onClick={this.clickButton}>Second Button</button>
        <button name="Button3" onClick={this.clickButton}>Third Button</button>

        </div>
    )
    
}
}
ClickTracker.defaultProps={
    initialValue:1,
    incrementBy:1
}


