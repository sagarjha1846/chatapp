import React from "react";
import { Router, Switch, Route } from "react-router";
import CallDir from "../Calls/CallDir";
import Calls from "../Calls/Calls";
import Home from "../Home/Home";
import MainContent from "../MainContent/MainContent";
import Meet from "../MeetStrangers/Meet";

function CenterContent() {
  return (
    <div className="CenterContent">
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/meetstranger">
          <Meet />
        </Route>
      </Switch>
      <Switch>
        <Route path="/chat">
          <MainContent />
        </Route>
      </Switch>
      <Switch>
        <Route path="/calls">
          <CallDir/>
        </Route>
      </Switch>
    </div>
  );
}

export default CenterContent;
