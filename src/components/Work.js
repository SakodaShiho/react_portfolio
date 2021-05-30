import React from "react";
import { SimpleTabs } from "./SimpleTabs";
import "../css/Work.css";

export const Work = (props) => {
  return (
    <div>
      <h1 className="pageTitle">WORK</h1>
      <hr />
      <div className="tabs">
        <SimpleTabs />
      </div>
    </div>
  );
};
