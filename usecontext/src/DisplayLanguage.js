import  { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage (){
  
    const language=useContext(LanguageContext)

   
     
        return(<h1> The current language is {language}</h1>)

}
      
       
       
     