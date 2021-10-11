import React from "react";
import Post from "../Post/Post";
import Spacer from "../Spacer/Spacer";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Post">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Spacer />
      </div>
    </div>
  );
}

export default Home;
