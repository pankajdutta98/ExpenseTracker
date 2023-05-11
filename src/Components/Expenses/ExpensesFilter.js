import React from 'react';
import "./ExpensesFilter.css"

const ExpensesFilter = (props) => {
    const filterYearHandler = (event) => {
        props.onChangeFilterYear(event.target.value);
    }
    const filterMonthHandler = (event) => {
      props.onChangeFilterMonth(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value = {props.year} onChange = {filterYearHandler}>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
        </select>
        <select value = {props.month} onChange = {filterMonthHandler}>
        <option value='-1'>--Select--</option>
          <option value='0'>Jan</option>
          <option value='1'>Feb</option>
          <option value='2'>Mar</option>
          <option value='3'>Apr</option>
          <option value='4'>May</option>
          <option value='5'>Jun</option>
          <option value='6'>Jul</option>
          <option value='7'>Aug</option>
          <option value='8'>Sep</option>
          <option value='9'>Oct</option>
          <option value='10'>Nov</option>
          <option value='11'>Dec</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;