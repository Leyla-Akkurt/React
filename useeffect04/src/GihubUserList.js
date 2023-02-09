import { useState } from "react";
import { GithubUser } from "./GithubUser";


export function GithubUserList(){

   
    const[addUserName,setAddUserName]=useState("")

    const handleOnchange=(event)=>{
        const addValue=event.target.value;
        setAddUserName(addUserName=>addValue)
      
    }
     const handleOnclick=()=>{
        setAddUserName(addUserName => [addUserName])
                } 
console.log(addUserName);


  
    return(
        <div>
        <input name="username" onChange={handleOnchange}/>
        <button onClick={ handleOnclick}>Add User Name</button>

        <GithubUser username={addUserName}/>
        
        </div>
    )

    

} 