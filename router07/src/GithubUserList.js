import { Link, Outlet } from "react-router-dom";

import { useGithubUsers } from "./useGithubUsers";

export function GithubUserList(){
    
    const {users}=useGithubUsers();
    console.log(users);
  /*   {
        users.map(user=>
            <li><Link to={`/users/${user.login}`}>{user.login}</Link></li>
        )
            }  */

    return (
        <div>
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