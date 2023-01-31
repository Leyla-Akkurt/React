import React from 'react';
import ReactDOM from 'react-dom/client';

function sum(a,b){
  return <h2>Sum of two elements are {a+b}</h2>
}

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(sum(5,7));