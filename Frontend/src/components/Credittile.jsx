// Credittile.js
import React from "react";

function Credittile(props) {
  return (
    <div className="col-md-3 creditCard">
      <h5>{props.creditType}</h5>
      <h3>{props.noOfCredits}</h3>
    </div>
  );
}

export default Credittile;
