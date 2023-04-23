import React from "react";
import Sidebar from "../Stackoverflow/Sidebar";
import "../Stackoverflow/css/index.css";
import MainQuestion from "./MainQuestion";
// import Main from "./Main";
// import axios from "axios";

function ViewQuestion() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default ViewQuestion;
