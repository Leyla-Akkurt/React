import { useEffect, useState } from "react"

export function useGithubUser( {username} ) {
     //using useState to update the state
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null)

    //get data from when the component mounted
    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
        .then(response=>{
            if(response.status!==200){
                setError(new Error("User not found"))
            }
                     return response.json();
                        }
                       
            )
           
        .then((json)=>{
            console.log(json);
            setLoading(false)
            setData(json)
        }
        )
        .catch(error=>{
            setError(error)
        })
        


    },[username])
    //since we use username in useEffect Hook we should define dependency array


return {
    data,
    error,
    loading
}


}