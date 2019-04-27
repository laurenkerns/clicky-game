import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.clickCard(props.id)}>
      <div className="img-container">
        <img src={props.image} alt="Friend" />
      </div>
    </div>
  );
}

export default FriendCard;