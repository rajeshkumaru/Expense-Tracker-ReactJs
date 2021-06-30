import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: Math.random.toString(),
    title: "book",
    amount: 30,
    date: new Date(),
  },
];
const App = () => {
  const [expenses, updateData] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenseData) => {
    updateData((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
