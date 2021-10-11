import React from "react";
import "./BottomNav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function BottomNav() {
  return (
    <div className="BottomNav">
      <span>
        <Link to="/Home">
          <HomeOutlinedIcon />
        </Link>
      </span>
      <span>
        <Link to="/chat">
          <ChatBubbleOutlineOutlinedIcon />
        </Link>
      </span>
      <span>
        <Link to="/meetstranger">
          <PeopleAltOutlinedIcon />
        </Link>
      </span>
      <span>
        <Link to="/calls">
          <CallOutlinedIcon />
        </Link>
      </span>
      <span>
        <Link to="/settings">
          <SettingsOutlinedIcon />
        </Link>
      </span>
    </div>
  );
}

export default BottomNav;
