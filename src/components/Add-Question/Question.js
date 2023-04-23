import React from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow";
import "./Question.css";
// import { TagsInput } from "react-tag-input-component";

function Question() {
  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>ask a question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input type="text" placeholder="Add the question title" />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                {/* <ReactQuill className="react-quill" theme="snow" /> */}
                <input type="text" placeholder="Add the question title" />
              </div>
            </div>
            {/* <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>
                <TagsInput
                  name="tags"
                  placeHolder="press enter to add new tag"
                />
                <input type="text" placeholder="Add the question title" />
              </div>
            </div> */}
          </div>
        </div>
        <button>Add Question</button>
      </div>
    </div>
  );
}

export default Question;
