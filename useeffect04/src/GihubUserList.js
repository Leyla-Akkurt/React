import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser"


export function GithubUserList(){
 const [name,setName]=useState("");
const {data,setData,fetchGithubUser}=useGithubUser(name);
 const [list,setList]=useState([data]);


 const handleGetUserData=(event)=>{
    event.preventDefault();
    fetchGithubUser(name)
    setList([...list,data])
}
/* const arr=[ {value: "title",id:1} ];
 console.log(arr.id) */
   useEffect(()=>{
    console.log( list)
  },[list]) 

    return(
       
        <div>
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={handleGetUserData}>Load User Data</button>
            {data && <li>User Name: {data.name || data.login}</li>}
            
            
        </div>
        )
        
} 
