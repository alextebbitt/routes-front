import React from 'react'
import "./CommentForm.scss";
const CommentForm = () => {
  return (
    <>
      <h1 className='write-a-comment'>Write a comment</h1>
      <div className="comment-box">
        <textarea id="elementId" name="inputName" rows="2" cols="40">
          Default placeholder or any dummy text.
        </textarea>
        <input type="submit" value="Submit"></input>
      </div>
    </>
  );
}

export default CommentForm
