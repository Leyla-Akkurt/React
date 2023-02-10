import { useState } from "react"


export function ClickCounter({initialValue=0 , incrementBy=1}){

    const [count,setCount]=useState(initialValue)
   
    const clickButton=()=>{
            setCount(
                count=>count+incrementBy
            )
    }
    return(
        <div>
        <h2>Count: {count}</h2>
        <button onClick={clickButton}>Click Me!</button>
        </div>
    )
    
}




