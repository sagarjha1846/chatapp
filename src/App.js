import "./App.css";
import BottomContent from "./Component/BottomContent/BottomContent";
import CenterContent from "./Component/CenterContent/CenterContent";
import Signup from "./Component/SignUp/Signup";
import TopContent from "./Component/TopContent/TopContent";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Component/Login/Login";

function App() {
  const [isUserLoginedIn, setIsUserLoginedIn] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  return (
    <div className="App">
      {isUserLoginedIn === true ? (
        <Router>
          <Switch>
            {isLoginClicked === true ? (
              <Route path="/">
                <Signup />
              </Route>
            ) : (
              <Route path="/">
                <Login />
              </Route>
            )}
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/">
              <div className="App-field">
                <div>
                  <TopContent />
                </div>
                <div className="overflow">
                  <CenterContent />
                </div>
                <div>
                  <BottomContent />
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
