import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


class App extends React.Component{
  state={
    language:"en"
  }
  
  handleLanguageChange=(event)=>{
    this.setState({
        language:event.target.value
    })
  
  }

 render(){

  
    return (
      <div>
      <select value={this.state.language} onChange={this.state.handleLanguageChange}>
      <option value="en">ENGLISH</option>
      <option value="it">ITALIANO</option>
      
  <LanguageContext.Provider value={this.state.language} >
    <DisplayLanguage />
  </LanguageContext.Provider>
  </select>
  </div>
  
  
)
  }
}
export default App;