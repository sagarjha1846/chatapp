import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import search from "../../assets/search.png";

function Calls() {
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
              <span>2:18pm <span>55min</span></span>
            </div>
            <div className="timezone">
              <span><LocalPhoneOutlinedIcon/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calls
