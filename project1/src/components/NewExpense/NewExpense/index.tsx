import React, {useState} from 'react';
import './style.css';

import ExpenseForm from '../ExpenseForm';
import {Expense, ExpenseData} from '../types';

interface NewExpenseProps {
  onAddExpense: (expense: ExpenseData) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({onAddExpense}) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
