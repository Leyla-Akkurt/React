import { useEffect, useState } from "react"

export function GithubUser( {username} ) {
     //using useState to update the state
    const [data,setData]=useState(null);

    //get data from when the component mounted
    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(response=>{
                     return response.json();
                        }
            )
        .then((json)=>{
            console.log(json);
            setData(json)
        }
        )
        


    },[username])
    //since we use username in useEffect Hook we should define dependency array


return <div>{data && <h1> {data.name}</h1>}</div>//?


}