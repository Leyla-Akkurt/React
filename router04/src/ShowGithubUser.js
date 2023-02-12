
import { GithubUser } from "./GithubUser";
import { useParams } from "react-router-dom"

export function ShowGithubUser(){
    const {username="gianmarcotoso"}=useParams()
    
    return (
        <GithubUser username={username} />
    )
}