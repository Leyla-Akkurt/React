import React from "react";

export class Counter extends React.Component{
    state={
        count:this.props.initialValue ?? 0
    }
    //It is nor required to define constructor method so it is build by React automatcally
   /* constructor(props){
    super(props)
   } */
    componentDidMount(){
        setInterval(
            ()=>{
                this.setState((state)=>
                {
                    return (
                        {
                            count:state.count+(this.props.incrementBy ?? 1)
                        }
                    )
                })
            }

        ,(this.props.timeout ?? 1000))
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
            </div>
        )
    }
}