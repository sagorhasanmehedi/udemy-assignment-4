import React from "react";
import ExpencesDate from "../ExpencesDate/ExpencesDate";
import "./ExpencesItem.css";

const ExpencesItem = (props) => {
  return (
    <div className="">
      <div className="expense-item">
        <div className="expense-item__description">
          <ExpencesDate date={props.data?.date} />
          <h2>{props.data?.title}</h2>
        </div>
        <div className="expense-item__price">
          <h2>$ {props.data.amount}</h2>
        </div>
      </div>
    </div>
  );
};

export default ExpencesItem;
