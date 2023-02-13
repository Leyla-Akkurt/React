import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
 
    const {data,error,onRefresh}=useGithubUser({username})
   

    return (
    <div>
    
    {data && <h1>User Name: {data.name || data.login} </h1>} 
    {error && <h1>User Not Found </h1>} 
    <button onClick={onRefresh}>Refresh</button>
   
    
    </div>
    )
}