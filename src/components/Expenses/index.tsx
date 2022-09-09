import React from 'react';

import './style.css';
import ExpenseItem from '../ExpenseItem';

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = props => {
  return (
    <div className="expenses">
      {props.expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default Expenses;
