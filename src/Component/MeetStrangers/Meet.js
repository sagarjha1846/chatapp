import React from "react";
import "./Meet.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Spacer from "../Spacer/Spacer";
function Meet() {
  return (
    <div className="Meet">
      <h2>Chat With Strangers Near You</h2>
      <p>
        Meet Stranger all around the world and chat with them for 10min and if
        you Like be friends you can just add them,you can Filter Result
        according to your Interet
      </p>

      <button className="chatButton">Search People To Chat</button>

      <button className="filter">
        Filter
        <span>
          <ArrowForwardIcon />
        </span>
      </button>
      <Spacer />
      <Spacer />
     
    </div>
  );
}

export default Meet;
