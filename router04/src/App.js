
import { ClickCounter } from "./ClickCounter";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";


export  function App({name,username}){

      return (
        <div>
          <Link to="/"> Welcome </Link> ||  <Link to="/counter"> Counter</Link> || <Link to="/:username"> UserName</Link>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/counter" element={<ClickCounter />}/>
        <Route path="/:username" element={<ShowGithubUser />}/>
        
      </Routes>
      </div>
      
      )
  }


