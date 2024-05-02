import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "./assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 


import './EventModal.css'


export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 mt-10 text-xl text-gray-500 fond-bold ">
      schedule
      </h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5 text-gray-500"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <ChevronLeftIcon className="movee">
          chevron_left
        </ChevronLeftIcon>
      </button>
      <button onClick={handleNextMonth}>
        <ChevronRightIcon className="movee">
          chevron_right
        </ChevronRightIcon>
      </button>
      <h2 className="ml-4 mt-12 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
    </header>
  );
}
