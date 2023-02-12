
import { ClickCounter } from "./ClickCounter";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";


export  function App(){

      return (
        <div>
          <Link to="/"> Welcome </Link> ||  <Link to="/counter"> Counter</Link> || <Link to="/:username"> UserName</Link> 
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/counter" element={<ClickCounter />}/>
        <Route path="/:username" element={<ShowGithubUser />}/>
        <Route path="*" elememt={<div>
                                    <p>Not Found</p>
                                  <Link to="/">Go to Home Page</Link>
                                    </div>}/>
      </Routes>
     
      </div>
      
      )
  }


