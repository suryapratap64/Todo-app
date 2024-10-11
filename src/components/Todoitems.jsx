import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";


const Todoitems = ({ todoitems,onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemcontainer}> 
        {todoitems.map((item) => (
          <Todoitem
          key={item.name} tododate={item.duedate} todoname={item.name} onDeleteClick={onDeleteClick}></Todoitem>
        ))}
        {/* <Todoitem tododate="4/09/3020" todoname="Buy milk"></Todoitem>
        <Todoitem tododate="4/09/3020" todoname="Go to college"></Todoitem> */}
      </div>
    </>
  );
};
export default Todoitems;
