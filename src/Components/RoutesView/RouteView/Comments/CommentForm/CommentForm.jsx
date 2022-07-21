import React from "react";
import "./CommentForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../../../../features/comments/commentsSlice";
const CommentForm = ({routeId}) => {
  // const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const handleComment = (ev) => {
    ev.preventDefault();
    console.log(ev.target.commentValue.value);
    const newComment = {
      routeId: routeId,
      comment: ev.target.commentValue.value
    };
    dispatch(createComment(newComment));
  };

  return (
    <>
      <h1 className="write-a-comment">Escribe un comentario</h1>
      <div className="comment-box">
        <form onSubmit={handleComment}>
          <textarea id="commentValue" name="inputName" rows="2" cols="40">
            Escribe un comentario aqui
          </textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default CommentForm;
