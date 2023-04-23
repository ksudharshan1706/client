import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";
// import axios from "axios";

function Index() {
  const [questions, setQuestions] = useState([]);

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
