import React from "react";
import ExpencesDate from "../ExpencesDate/ExpencesDate";
import "./ExpencesItem.css";

const ExpencesItem = (props) => {
  console.log(props);
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ExpencesDate date={props.data.date} />
        <h2>{props.data.title}</h2>
      </div>
      <div className="expense-item__price">
        <h1>$799.48</h1>
      </div>
    </div>
  );
};

export default ExpencesItem;
