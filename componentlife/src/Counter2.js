import React from "react";

export class Counter2 extends React.Component{
    state={
        count:this.props.initialValue ?? 0
    }
    //It is not required to define constructor method so it is build by React automatcally
   /* constructor(props){
    super(props)
   } */
    componentDidMount(){
        this._interval=setInterval(
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
    //Ask Imre
    componentWillUnmount(){
        if(this._interval){
            clearInterval(this._interval);
        }
    }
    //Ask
    prevProps=this.props.initialValue;
    componentDidUpdate(prevProps){
        if(this.state.count> 10*prevProps){
            clearInterval(this._interval);
        }
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
            </div>
        )
    }
}