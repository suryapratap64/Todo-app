import { useState } from "react";
import { MdAddCard } from "react-icons/md";
import styles from "./Todoitems.module.css";






function AddTodo({ onnewitem }) {
  const [todoname, settodoname] = useState("");
  const [duedate, setduedate] = useState("");
  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };
  const handledatechange = (event) => {
    setduedate(event.target.value);
  };
  const handleaddbuttonclicked = () => {
    onnewitem(todoname, duedate);
    setduedate('');
    settodoname('');

  };


  return (
    <div class="container text-center ">
      <div class="row kg-row">
        <div class="col">
          <input
          className="input"
            type="text"
            placeholder="Enter Todo Here"
            value={todoname}
            onChange={handlenamechange}
          />
        </div>
        <div class="col">
          <input className="input" type="date" value ={duedate}onChange={handledatechange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-button"
            onClick={handleaddbuttonclicked}
          >
         <MdAddCard />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
