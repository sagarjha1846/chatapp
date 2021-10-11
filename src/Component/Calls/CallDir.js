import React from 'react'
import Search from '../SearchFields/Search';
import Calls from './Calls';

function CallDir() {
  return (
    <div className="MainContent">
      <Search/>
      <div className="chats">
        <Calls />
        <Calls />
        <Calls />
        <Calls />
        <Calls />
        <Calls />
      </div>
    </div>
  );
}

export default CallDir
