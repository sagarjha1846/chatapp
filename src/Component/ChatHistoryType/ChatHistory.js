import React from "react";
import "./chattype.css";
function ChatHistory() {
  return (
    <div className="ChatType">
      <div className="container">
        <button className="btn active">Friends</button>
        <button className="btn">Strangers</button>
      </div>
    </div>
  );
}

export default ChatHistory;
