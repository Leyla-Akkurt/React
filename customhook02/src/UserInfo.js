import { UseUserInfo } from "./UseUserInfo";


export function UserInfo(){
   const{username,password,handleDataChange}=UseUserInfo()
   
  

   return (
    <form>
    <input name="username" value={username} onChange={handleDataChange}/>
    <input name="password" type="password" value={password} onChange={handleDataChange}/>
    </form>

   )
}