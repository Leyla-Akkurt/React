import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser"


export function GithubUserList() {
 const [name,setName]=useState([]);
const {data,setData,fetchGithubUser}=useGithubUser(name);
 const [list,setList]=useState([]);


 const handleGetUserData=(event)=>{
 // event.preventDefault();
    //event.preventDefault();
    fetchGithubUser(name)
    
    setList([...list,data.name])
      
}


    useEffect(()=>{
    list.map(a=>
      <li>{a}</li>)
  }
  ,[list])   

 


console.log(list)
    return(
       
        <div>
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={handleGetUserData}>Load User Data</button>
         
 
            {
    list.map(a=>
     <li>User Name: {a}</li>
   )
 }
        </div>
        )
        
} 
