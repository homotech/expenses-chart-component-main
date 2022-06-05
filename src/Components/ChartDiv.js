import React from "react";
import ParentContainer from "./ParentContainer";

function ChartDiv() {
  return (
    <div className="chartDiv">
      <div className="spending">
        <h1>Spending - last 7 days</h1>
      </div>
      <ParentContainer />
      <hr />
      <div className="totalThisMonth">
        <div className="total">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="percentagefromlastmonth">
          <p className="percentage">+2.4% </p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default ChartDiv;
