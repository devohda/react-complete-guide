import React from 'react';

import './style.css';
import Card from '../../UI/Card';
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
    <Card className="expenses">
      {props.expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
