import React, { useState } from 'react';
import Day from '../Day/Day.jsx';
import './Month.css';
import data from '../../data/year.json';

const Month = () => {
  const [count, setCount] = useState(0);
  const [month, setMonth] = useState(data.months[count].title);
  function addMonth() {
    setCount(count + 1);
    if (count + 1 === 12) {
     setCount(0);
    setMonth(data.months[0].title);
    } else {
      setMonth(data.months[count + 1].title);
    }
  }
  function subtractMonth() {
    setCount(count - 1);
    if (count - 1 === -1) {
      setCount(11);
      setMonth(data.months[11].title);
    } else {
      setMonth(data.months[count - 1].title);
    }

  }
  const daysArray = [];
  for(let i = 0; i <= 31 ; i++) {
    daysArray.push(<Day number={i} key={i} class="day" />)
  }
  return(
  <div className="Month">
    <div className="flex">
      <button onClick={() => subtractMonth()} className="arrow_left">Last month</button>
      <h1>{month}</h1>
      <button onClick={() => addMonth()} className="arrow_right">Next month</button>
    </div>    
    <h3>{count}</h3>
    <div className="days">
    {daysArray}
    </div>    
  </div>
)};

export default Month;
