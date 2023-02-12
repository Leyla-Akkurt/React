import { useCounter } from "./useCounter";

export function HookCounter({initialValue=0}){
    const {count,increment,decrement,reset}=useCounter(initialValue);

    return(
        <>
        <h1>Counter :{count}</h1>
        <button name="increment" onClick={increment}>Inrement</button>
        <button name="decrement" onClick={decrement}>Decrement</button>
        <button  name="reset" onClick={reset}>Reset</button>
        </>
    )
}