import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navdeco">
      <div className="row">
        <div className="col-4">
          <a href="/React-Clicky_Game/#">Clicky Game</a>
        </div>
        <div className="col-4">
          Click an image to begin
        </div>
        <div className="col-4">Score: {props.counter} | Top Score: {props.topScore}</div>
      </div>
    </nav>
  );
}

export default Navbar;