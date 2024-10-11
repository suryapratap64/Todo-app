import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import Todoitem from "./components/Todoitem";
import { useState } from "react";
import Welcomemessage from "./components/Welcomemessage";

//ctrl ke saath file bhi kholsakte hai
function App() {
  // const initialtodoitems = [
  //   {
  //     name: "buy milk",
  //     duedate: "4/09/3020",
  //   },
  //   {
  //     name: "go to college",
  //     duedate: "4/09/3020",
  //   },
  //   {
  //     name: "like this video",
  //     duedate: "4/09/3020",
  //   },
  // ];
  const [todoitems,settodoitems]=useState([]);
  const handlenewitem=(itemname,itemduedate)=>{

    const newtodoitem=[...todoitems,{name:itemname,duedate: itemduedate}]
    settodoitems(newtodoitem);
  }
  //center tag move at the center all the thing
  const handledeleteitem =(todoitemname)=>
  //filter method for not entere in array
  {
    const newtodoitem =todoitems.filter(item=>item.name!==todoitemname)
    settodoitems(newtodoitem);
    console.log(`item deleted:${todoitemname}`)
  }
  return (
  <div className="bg">
    <center className="todo-container">
      <AppName />
      <AddTodo  onnewitem={handlenewitem}/>
      { todoitems.length===0 &&< Welcomemessage ></Welcomemessage>}
      <Todoitems todoitems={todoitems} onDeleteClick={handledeleteitem}></Todoitems>
     
    </center>
    </div>
   
   
  );
}

export default App;
