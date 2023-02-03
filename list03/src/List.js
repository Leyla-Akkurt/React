import React from "react";


export class List extends React.Component{
    state={
        listItem:this.props.todos,
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
                //befor json listItem: [...this.state.listItem, this.state.addItem ]  
                listItem: [...this.state.listItem, {title: this.state.addItem} ]  
            }                    
)}
   
  
    render(){
       
            const items=this.state.listItem.map(
                (todo,index)=>
                <li key={index}>{todo.title}</li>
           );
        return(
            <div>
                <ul>
                 {items}
                </ul>

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