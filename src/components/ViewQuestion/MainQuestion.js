import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import { Avatar } from "@mui/material";
import "./css/index.css";
import { Height } from "@mui/icons-material";

function MainQuestion() {
  const [show, setShow] = useState(false);
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">This is Question Title</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>TimeStamp</p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43 times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>
                <BookmarkIcon />

                <HistoryIcon />
              </div>
            </div>
            <div className="question-answer">
              <p>This is test question body</p>
              <div className="author">
                <small>asked "TimeStamp"</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Author Name</p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>
                    This is comment -<span>User Name</span>
                    <small>TimeStamp</small>
                  </p>
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      type="text"
                      placeholder="Add your comment.."
                      rows={5}
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                    ></textarea>
                    <button
                      style={{
                        maxWidth: "fit-content",
                      }}
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            0 Answers
          </p>
        </div>
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <textarea style={{ height: "100%", width: "100%" }}></textarea>
      </div>
      <button
        // onClick={handleSubmit}
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  );
}

export default MainQuestion;
