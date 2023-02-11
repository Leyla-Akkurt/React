import { BrowserRouter } from  "react-router-dom";
import { App } from "./App"
export function Root(){
    return(
        <BrowserRouter>
        <App name="Leyla" username="Leyla-Akkurt"/>
        </BrowserRouter>


    )
}