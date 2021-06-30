import React, { useState } from "react";

import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHAndler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onCancel={stopEditingHAndler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></NewExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
