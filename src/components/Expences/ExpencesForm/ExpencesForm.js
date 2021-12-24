import React, { useState } from "react";
import "./ExpencesForm.css";

const ExpencesForm = ({ handelNewDataUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleTitleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const handleAmountChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const handleDateChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newExpemces = {
      id: Math.random().toString(),
      title: formData.enteredTitle,
      amount: formData.enteredAmount,
      date: new Date(formData.enteredDate),
    };
    handelNewDataUpdate(newExpemces);
    setIsEditing(false);
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleIsEditingFalse = () => {
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={handleEditing}>Add new expences</button>
        )}
        {isEditing && (
          <>
            {" "}
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input onChange={handleTitleChange} type="text" />
              </div>
              <div className="new-expense__control">
                <label>Amount</label>
                <input
                  onChange={handleAmountChange}
                  type="number"
                  min="0.1"
                  step="0.1"
                />
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input
                  onChange={handleDateChange}
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                />
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="button" onClick={handleIsEditingFalse}>
                Cansle
              </button>
              <button type="submit">Add Expences</button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default ExpencesForm;
