import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App({name}){

  return (
    <Routes>
    <Route path="/" element={<Welcome name={name}/>}  />
    </Routes>
   
    
  )

}

