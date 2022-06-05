import React from "react";
import Logo from "../Assets/images/logo.svg";

function MyBalance() {
  return (
    <div className="mybalance">
      <div className="mybal">
        <p>My Balance</p>
        <h1>$921.48</h1>
      </div>
      <div className="logo">
        <img src={Logo} alt="The logo image of the brand" />
      </div>
    </div>
  );
}

export default MyBalance;
