// Profiletile.js
import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Profiletile(props) {
  return (
    <div class="row profile-Div">
      <div class="col-md-4 ProfilePhoto">
        <img class="profileimg img-fluid" src={props.image} alt={props.alttext} />
      </div>
      <div class="col-md-8 ProfileDis">
        <h2>{props.usn}</h2>
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default Profiletile;
