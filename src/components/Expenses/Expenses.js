import { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../List/ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [newFilteredYear, updateYear] = useState("2021");

  const onSelectFilterHandler = (selectedValue) => {
    updateYear(selectedValue);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === newFilteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={newFilteredYear}
        onSelectFilter={onSelectFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
