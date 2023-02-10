Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.


Long version: UserInfo can be written such that long
import { useEffect, useState } from "react";

export function UserInfo(){
   
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    useEffect(()=>
    console.log({username,password}),[username,password])

   const handleUserName=(event)=>{
    setUserName(username=>event.target.value)
   }
   const handlePassword=(event)=>{
    setPassword(password=>event.target.value)
   }

   return (
    <form>
    <input name="username"  onChange={handleUserName}/>
    <input name="password"  onChange={handlePassword}/>
    </form>

   )
}