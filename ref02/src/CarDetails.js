import { useEffect, useRef, useState } from "react";

export function CarDetails() 
{
    const [model,setModel]=useState({model:"Fiat"});
    const [year,setYear]=useState({year:2});
    const [color,setColor]=useState({color:"blue"});

    const previousModel=useRef(model);
    const previousYear=useRef(year);
    const previousColor=useRef(color);


useEffect(()=>{
    previousModel.current=model;
    previousYear.current=year;
    previousColor.current=color;
},[model,year,color])

const car={model:previousModel.current,year:previousYear.current,color:previousColor.current}
console.log(car)



    return(
        <>
    <form >
     <input 
     name="model"
     ref={previousModel}
     onChange={e=>setModel(e.target.value)}
    />
     <input 
     name="color"
     ref={previousColor}
     onChange={e=>setColor(e.target.value)}
    />
     <input 
     name="year"
     ref={previousYear}
     onChange={e=>setYear(e.target.value)}
    />

    </form>
   
    </>
    )
}