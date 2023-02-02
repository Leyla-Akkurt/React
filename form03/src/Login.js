import React from "react";

export class Login extends React.Component{
    state={
        username:"",
        password:"",
        login: "true"
    }
    componentDidUpdate(){
        console.log(this.state) 
    }
    onLogin=(event)=>{
        const value= event.target.value;
        const name=event.target.name;
        const log= (event.target.value) ? false: true;
        this.setState({

           [name]:value,
           login:log
        })
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
                <input
                
                name="login"
                disabled={this.state.login}
                placeholder="Login"
                />
            </div>
        )
    }
}