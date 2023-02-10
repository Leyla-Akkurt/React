
import { ClickCounter } from "./ClickCounter";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";


export  function App({name,username}){

      return (
      <Routes>
        <Route path="/" element={<Welcome name={name}/>}/>
        <Route path="/counter" element={<ClickCounter />}/>
        <Route path="/:username" element={<ShowGithubUser username={username}/>}/>
      </Routes>
      )
  }


