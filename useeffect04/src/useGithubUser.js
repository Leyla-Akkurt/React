import { useEffect, useState } from "react"

export function useGithubUser( username ) {
     //using useState to update the state
    const [data,setData]=useState(null);
   

    //get data from when the component mounted
 async function fetchGithubUser(username){
    try{
        const response=await fetch(`https://api.github.com/users/${username}`);
       
        const json=await response.json()
        setData(json)
    }
    catch(error){
        setData(null)
    }
}   
   

    //since we use username in useEffect Hook we should define dependency array

return {
    data,
    setData,
    fetchGithubUser
}


}