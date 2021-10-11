import React from "react";
import ChatContact from "../ChatContact/ChatContact";
import ChatHistory from "../ChatHistoryType/ChatHistory";
import Search from "../SearchFields/Search";
import Spacer from "../Spacer/Spacer";
import "./MainContent.css";
function MainContent() {
  return (
    <div className="MainContent">
      <Search />
      <ChatHistory />
      <div className="chats">
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <ChatContact />
        <Spacer />
      </div>
    </div>
  );
}

export default MainContent;
