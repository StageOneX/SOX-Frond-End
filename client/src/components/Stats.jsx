import React from "react";
import { Link } from 'react-router-dom';
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat">
        <b><h2>50+</h2></b>
        <p><b>Live Sessions <br/>this month</b></p>
      </div>
      <div className="stat">
        <h2>100+</h2>
        <p>Exhibitors <br/>worldwide</p>
      </div>
      <div className="stat">
        <h2>20+</h2>
        <p>Countries</p>
      </div>
    </div>
  );
};

export default Stats;
