import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComp = ({
  newTaskDueDate,
  setNewTaskDueDate,
  showCalendar,
  calendarRef,
}) => {
  const handleDateChange = (date) => {
    setNewTaskDueDate(date);
  };

  return (
    <div
      ref={calendarRef}
      className={`calendar-overlay ${showCalendar ? "open" : ""}`}
    >
      <Calendar onChange={handleDateChange} value={newTaskDueDate} />
    </div>
  );
};

export default CalendarComp;
