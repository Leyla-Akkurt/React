import { useState } from "react";


export function Login (){
    const [data,setData]=useState({
                                    username:"",
                                    password:"",
                                    isDisabled:true
    })
   
    const onLogin=(event)=>{
        const value= event.target.value;
        const name=event.target.name;
        const disabledValue= (event.target.value) ? false: true;
        setData({
           [name]:value,
           isDisabled:disabledValue
        })
    }
     const handleLogin=()=>{
        const {username,password,isDisabled}=data;
        console.log({username,password,isDisabled})
     }
    

        return(
            <div>
                <input
                name="username" 
                value={data.username}
                onChange={onLogin}
                />

                <input
                name="password"
                type="password"
                value={data.password}
                onChange={onLogin}
                />
    
                
                <button
                name="login"
                disabled={data.isDisabled}
                onClick={handleLogin}
                >Login</button>
            </div>
        )
    }
