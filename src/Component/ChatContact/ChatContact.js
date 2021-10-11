import React from "react";
import "./chatstyle.css";
import search from "../../assets/sagar.jpg";
function ChatContact() {
  return (
    <div className="ChatContact">
      <div className="contactDetails">
        <div className="contactImage">
          <img className="profilePic" src={search} alt="picture"></img>
        </div>
        <div>
          <div className="chatMess">
            <div className="profileName">
              <h2>Sagar Jha</h2>
              <span>Hey Bro, How are You...</span>
            </div>
            <div className="timezone">
              <span>9d</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatContact;
