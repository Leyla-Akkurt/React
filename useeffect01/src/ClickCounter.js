import { useEffect, useState } from "react"


export function ClickCounter({initialValue=0 , incrementBy=1}){

    const [count,setCount]=useState(initialValue);

    const onCounter=(count)=>{
        console.log("Counter value is :",count)
    }

    useEffect(()=>{
        onCounter(count)
    }); 

   
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




