import React from 'react';

import './style.css';
import Card from '../../UI/Card';
import ExpenseDate from '../ExpenseDate';

interface ExpenseItemProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: React.FC<ExpenseItemProps> = props => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
