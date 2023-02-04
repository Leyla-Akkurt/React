import React from "react";


export class List extends React.Component{
    state={
        listItem:this.props.todos,
        addItem:"",
        removeItem:""
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
                listItem: [...this.state.listItem, {title: this.state.addItem} ],
                addItem:""
                
            }    

        )}
        handleReset=()=>{
            this.setState({
                listItem:[],
                addItem: ""
            })
        }

        handleRemoveItem=(element)=>{
           
           console.log(element)

           } 
   
  
    render(){
       
            const items=this.state.listItem.map(
                (todo,index)=>
                
                <li key={index}>{todo.title}
                  <button 
                name="remove" 
                type="reset"
                onClick={this.handleRemoveItem(todo.title)}
                >
                Remove
                </button></li> 
            );
          
        return(
            <div>
                <ul>
                 {items}
                </ul>

                <input
                name="listItem"
                value={this.state.addItem}
                onChange={this.handleOnchange}
                />

                <button 
                name="addItem"
                onClick={this.handleOnclick}
                >Add Item</button>

                <button 
                name="reset"
                type="reset"
                onClick={this.handleReset}
                >Reset</button>
            </div>
        )
    }
}