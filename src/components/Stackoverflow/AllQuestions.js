// import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./css/AllQuestions.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions({ data }) {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to="/question">This is Question Title</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>This is answer</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          ></div>
          <div className="author"></div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
