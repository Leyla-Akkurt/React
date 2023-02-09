import { useEffect, useState } from "react"


export function Counter(){
   const [count,setCount]=useState(0);
   
  

    useEffect(()=>{
      const id= setInterval(
            ()=>{
                //mounted
                setCount((count)=>count+1)
                },1000);
                //about the unmounted
                return()=>{
                    clearInterval(id)
                }
    }
    )//not defining dependency array couse it ends after unmounting

    return(
            <div>
                <h1>Counter: {count}</h1>
            </div>
        )
    
    }
