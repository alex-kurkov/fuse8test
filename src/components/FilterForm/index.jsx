import React from "react";
import './styles.css';

const FilterForm = ({ value, setValue }) => {
  const handleChange = e => setValue(e.target.value);
  return (
    <form onSubmit={(e) => e.preventDefault()} className="filter-form" aria-label="Filter form">
      <label htmlFor="filter" className="filter-form__label">Filter</label>
      <input 
        id="filter"
        className="filter-form__input" 
        type="text"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default FilterForm;
