
import { ClickCounter } from "./ClickCounter";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";


export  function App({name}){

      return (
      <Routes>
        <Route path="/" element={<Welcome name={name}/>}/>
        <Route path="/counter" element={<ClickCounter />}/>
      </Routes>
      )
  }


