import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


class App extends React.Component{

  state={
    language:"English"
  }
  
  handleLanguageChange=(event)=>{
    this.setState({
        language:event.target.value
    })
  console.log(this.state.language)
  }

 render(){

  
    return (
      <div>
      <select value={this.state.language} onChange={this.handleLanguageChange}>
      <option value="English">ENGLISH</option>
      <option value="Italiano">ITALIANO</option>
      </select>
      
   <LanguageContext.Provider value={this.state.language}>
    <DisplayLanguage />
  </LanguageContext.Provider>
  
  </div>
  
  
)
  }
}
export default App;