import React from 'react';
import './style.css';

import ExpenseForm from '../ExpenseForm';
import {Expense, ExpenseData} from '../types';

interface NewExpenseProps {
  onAddExpense: (expense: ExpenseData) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({onAddExpense}) => {
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
