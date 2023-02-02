import React from "react";

export class Login extends React.Component{
    state={
        username:"",
        password:"",
        isDisabled: true
    }
    componentDidUpdate(){
        console.log(this.state) 
    }
    onLogin=(event)=>{
        const value= event.target.value;
        const name=event.target.name;
        const disabledValue= (event.target.value) ? false: true;
        this.setState({

           [name]:value,
           isDisabled:disabledValue
        })
    }
     handleReset=()=>{
        this.setState( {
            username:"",
            password:"",
            isDisabled:true
        } )
        
     }
     handleLogin=()=>{
        const user=this.state;
        console.log(user)
     }
    
     

    render(){
        return(
            <div>

                <input
                name="username" 
                value={this.state.username}
                onChange={this.onLogin}
                />

                <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onLogin}
                />
           

           
                <button
                name="login"
                disabled={this.state.isDisabled}
                onClick={this.handleLogin}
                >Login</button>
            
                <button
                name="reset"
                type="reset"
                placeholder="Reset"
                onClick={this.handleReset}
                >Reset</button>
            </div>
        )
    }
}