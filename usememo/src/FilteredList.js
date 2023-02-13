import { useMemo } from "react"

export function FilteredList({users}){
  
    const adults=useMemo(()=>{
        return users.filter((user)=> user.age >18)
    },[users]);
console.log(adults)
    return(
        <div>
           {
          adults.map(user=><li>{user.name}</li>)
           }
        </div>
    )
}