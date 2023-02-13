import { FilteredList } from "./FilteredList";

const users=[
  {id:1,name:"Leyla Akkurt",age:32},
  {id:2,name:"Fatma Nur",age:20},
  {id:1,name:"Ali Kurt",age:34},
  {id:1,name:"Zeynep Tut",age:7},
  {id:1,name:"Dilruba Pelin",age:15}
]
function App() {
  return (
    <FilteredList users={users}/>
  );
}

export default App;
