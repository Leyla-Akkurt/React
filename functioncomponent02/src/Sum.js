
export function Sum({numbers}){
    const sum= numbers.reduce((a,b)=> a+b )
    return <h1>
       Sum of the numbers {sum}
    </h1>

}