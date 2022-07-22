import React, { useState } from "react";
import "./CommentForm.scss";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../../../../features/comments/commentsSlice";
const CommentForm = ({ routeId }) => {
  // const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [valoration, setValoration] = useState(1);

  const handleComment = (ev) => {
    ev.preventDefault();
    const newComment = {
      routeId,
      body: ev.target.commentValue.value,
      valoration,
    };
    dispatch(createComment(newComment));
  };

  const handleChange = (value) => {
    setValoration(value);
  };

  return (
    <>
      <h1 className="write-a-comment">Escribe un comentario</h1>
      <div className="comment-box">
        <form className="form" onSubmit={handleComment}>
          <textarea
            id="commentValue"
            name="inputName"
            rows="2"
            cols="40"
            placeholder="Escribe un comentario aqui"
          ></textarea>
          <input className="button" type="submit" value="Enviar" />
          <Rate onChange={handleChange} defaultValue={valoration} />
        </form>
      </div>
    </>
  );
};

export default CommentForm;
