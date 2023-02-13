import { Link, Outlet } from "react-router-dom";

import { useGithubUsers } from "./useGithubUsers";

export function GithubUserList(){
    
    const {users,error}=useGithubUsers();
    console.log(users);
  //I write map function but an error occured users return undefined 
  /*
  {
    users.map(user=>
        <li><Link to={`/users/${user.login}`}>{user.login}</Link></li>
    )
  }*/

    return (
        <div>
        {error && <h1>User Not Found </h1>} 
        <ul>
        {
         users.map(user=>
          <li><Link to={`/users/${user.login}`}>{user.login}</Link></li>
      )
        }
       </ul>

      <Outlet/>
    </div>
    )

}