import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          {/* Changed href below to refresh because github page link took / to root of project instead of page */}
          <a href="javascript:history.go(0)">Clicky Game</a>
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
