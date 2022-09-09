import React, {useState} from 'react';

import './style.css';
import ExpensesFilter from '../../ExpensesFilter';
import {ExpenseData} from '../../NewExpense/types';
import Card from '../../UI/Card';
import ExpenseItem from '../ExpenseItem';

interface ExpensesProps {
  expenses: ExpenseData[];
}

const Expenses: React.FC<ExpensesProps> = props => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const filterChangeHandler = (value: number) => {
    setFilteredYear(value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
