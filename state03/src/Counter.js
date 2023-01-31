import React from "react";
import { CounterDisplay } from "../../state04/src/CounterDisplay";

export class Counter extends React.Component{
    state={
        count:this.props.initialValue ?? 0
    }
    constructor(props){
        super(props);
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
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}