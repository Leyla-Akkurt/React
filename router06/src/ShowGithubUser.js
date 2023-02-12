import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function ShowGithubUser(){
    const {username}=useParams()
    const {data}=useGithubUser(username);
    return (
       <h1>User Name: {data}</h1>
    )
}