import React from "react";
import "./ExpencesFilter.css";

const ExpencesFilter = ({ YearHandel, expencesYear }) => {
  const expencesYearHandel = (event) => {
    YearHandel(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={expencesYear} onChange={expencesYearHandel}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpencesFilter;
