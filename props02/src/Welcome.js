import React from "react";

export class Welcome extends React.Component{
    //If name props is not sent and default props is not defined then just Welcome is seen on the page
    render(){
        return(
            <div>
                <p>Welcome {this.props.name}</p>
            </div>
        )
    }
}
//If no name props is sent then default props is seen on the page
Welcome.defaultProps={
    name:"Leyla"
}