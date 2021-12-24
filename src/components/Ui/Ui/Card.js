import React, { useState } from "react";
import "./Card.css";
import ExpencesItem from "../../Expences/ExpencesItem/ExpencesItem";
import ExpencesFilter from "../../Expences/ExpencesFilter/ExpencesFilter";

const Card = () => {
  const [expencesYear, setExpencesYear] = useState(2020);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const YearHandel = (year) => {
    setExpencesYear(year);
  };
  return (
    <div className="Ui">
      <ExpencesFilter YearHandel={YearHandel} expencesYear={expencesYear} />
      {expenses.map((Data) => (
        <ExpencesItem data={Data} key={Data.id} />
      ))}
    </div>
  );
};

export default Card;
