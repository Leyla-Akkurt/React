import React from "react";


export class List extends React.Component{
    state={
        listItem:
                    [
                    { title:"Make a cake"},
                    { title:"Go to Gym"},
                    { title:"Clean the Home"},
                    { title:"Take a shower"}
                    ],
        addItem:""
    }
     componentDidUpdate(){
        console.log(this.state)
    } 
    handleOnchange=(event)=>{
        const addValue=event.target.value;
       this.setState({
        addItem:addValue
       })
    }
    
     handleOnclick=()=>{
        this.setState(
            {
                //before json listItem: [...this.state.listItem, this.state.addItem ]  
                listItem: [...this.state.listItem, {title: this.state.addItem} ]  
            }                    
)}
   
  
    render(){
       
          
        return(
            <div>
              <ul> {this.props.render(this.state.listItem)}</ul>
               

                <input
                name="listItem"
                onChange={this.handleOnchange}
                />
                <button 
                name="addItem"
                onClick={this.handleOnclick}
                >Add Item</button>
            </div>
        )
    }
}