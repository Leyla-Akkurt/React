import React from "react";
import ReactDOM from 'react-dom/client';
import { HelloWorld } from "./HelloWorld";

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HelloWorld />);