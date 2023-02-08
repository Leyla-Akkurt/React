//If no props send to the Sum function it gets an error couse reduce function cant read the value. However when we set a default value there is no error for the Sum component 
export function Sum({numbers=[1, 2, 3]}){
    const sum= numbers.reduce((a,b)=> a+b )
    return <h1>
       Sum of the numbers {sum}
    </h1>

}