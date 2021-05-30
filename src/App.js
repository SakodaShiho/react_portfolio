import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Career } from "./components/Career";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="leftContents">
            <Navbar />
          </div>
          <div className="rightContents">
            <Route exact path="/" component={Home} />
            <Route exact path="/Career" component={Career} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Work" component={Work} />
          </div>
        </div>
      </Router>
    </div>
  );
};
