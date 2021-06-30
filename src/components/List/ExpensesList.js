import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (!props.items.length) {
    return <p className="expenses-list__fallback">No Expenses found</p>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
