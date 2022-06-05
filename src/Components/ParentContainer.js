import React, { useState } from "react";
import BarChart from "./BarChart";
import { Data } from "./Data";

function ParentContainer() {
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        data: Data.map((data) => data.amount),
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
      },
    ],
  });

  return (
    <div className="parentContainer">
      <BarChart chartData={userData} />
    </div>
  );
}

export default ParentContainer;
