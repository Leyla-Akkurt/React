import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


function App (){

  const [language,setLanguage]=useState("English")
  
  const handleLanguageChange=(event)=>{
   setLanguage(
      event.target.value
    )
    
  }

    return (
      <div>
      <select value={language} onChange={handleLanguageChange}>
      <option value="English">ENGLISH</option>
      <option value="Italiano">ITALIANO</option>
      </select>
      
   <LanguageContext.Provider value={language}>
    <DisplayLanguage />
  </LanguageContext.Provider>
  
  </div>
  
  
)
  }

export default App;