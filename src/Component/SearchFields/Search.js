import React from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className="search">
      <div className="search_container">
        <span>
          <SearchIcon />
        </span>
        <input placeholder="Searching..."></input>
      </div>
    </div>
  );
}

export default Search;
