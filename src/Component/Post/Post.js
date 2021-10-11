import React from "react";
import sagar from "../../assets/sagar.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./Post.css";
function Post() {
  return (
    <div className="postContainer">
      <div className="PostCards">
        <div className="PostHeader">
          <div className="ProfileImage">
            <img src={sagar} alt="search"></img>
          </div>
          <div className="ProfileName">
            <h2>Sagar Jha</h2>
            <span>Sunday 23 Jan</span>
          </div>
        </div>
        <div className="PostContent">
          <img src={sagar} alt="search"></img>
          <p>Google as became worlds largest tech giants</p>
        </div>
        <div className="Views">
          <span>
            <FavoriteBorderIcon />
          </span>
          <p>Liked By Sagar</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
