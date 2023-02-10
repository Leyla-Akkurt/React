import { useGithubUser } from "./useGithubUser";


export function GithubUser({username}){
    const {data,error,loading}=useGithubUser({username});

    return (
    <div>
        {data && <h1>User Name: {data.name || data.login} </h1>} 
        {error && <h1>There has been error </h1>} 
        {loading && <h1>There has been error </h1>} 

        
    </div>
    )
}