
import { ClickCounter } from "./ClickCounter";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";


export  function App(){

      return (
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/counter" element={<ClickCounter />}/>
      </Routes>
      )
  }


