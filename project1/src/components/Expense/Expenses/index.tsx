import React, {useMemo, useState} from 'react';

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

  const filteredExpense = useMemo(() => {
    return props.expenses.filter(
      expense => expense.date.getFullYear() === filteredYear,
    );
  }, [filteredYear, props.expenses]);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpense.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
