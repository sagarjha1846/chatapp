import React from "react";
import sagar from "../../assets/sagar.jpeg";
function Profile() {
  return (
    <div className="profile">
      <div className="NameAndPic">
        <img src={sagar} alt="sagar"></img>
        <div className="name">
          <h2>Sagar Jha</h2>
          <span>@SagarRJha</span>
        </div>
        <div className="details">
          <h2>Status</h2>
          <div className="badges">
            <span>245 Days</span>
            <span>100 Connection</span>
            <span>50 Close Friends</span>
            <span>5 Warings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
