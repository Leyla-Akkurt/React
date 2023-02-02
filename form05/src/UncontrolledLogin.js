import React from "react";

export class UncontrolledLogin extends React.Component{
    state={
        username:"",
        password:"",
       
    }
   
    handleFormSubmit=(event)=>{
        const username=event.elements.username.value;
        const password=event.elements.password.value;
        console.log({
            username,
            password
        })
    }

    render(){
        return(
            <div>
            <div>
                <h1>Uncontrolled Login</h1>
            </div>
            
            <div>
                <form onSubmit={this.handleFormSubmit}>
                        <input
                        name="username" 
                        />

                        <input
                        name="password"
                        type="password"
                        />

                        <button
                        name="login"
                        type="submit"
                        >Login</button>
                    
                        <button
                        name="reset"
                        type="reset"
                        >Reset</button>
                </form>
            </div>
            </div>
        )
    }
}