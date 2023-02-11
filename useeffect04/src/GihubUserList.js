import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser"


export function GithubUserList() {
 const [name,setName]=useState([]);
const {data,setData,fetchGithubUser}=useGithubUser(name);
 const [list,setList]=useState([]);


 const handleGetUserData=(event)=>{
 event.preventDefault();
    fetchGithubUser(name)
    setList([...list,data.name|| data.login])
    
  }

useEffect(()=>{
  console.log(`Usernames ${list}`)
},[list])

//console.log(list)
    return(
       
        <div>
            <input value={name} onChange={e=>setName(e.target.value)
            }/>
            <button onClick={handleGetUserData}>Load User Data</button>
         
 
            {
    list.map((a,index)=>
     <li key={index}>User Name: {a}</li>
   )
 }
        </div>
        )
        
} 
