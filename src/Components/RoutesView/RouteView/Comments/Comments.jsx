import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../Comments/Comment/Comment";
import { getComments } from "../../../../features/comments/commentsSlice";

const Comments = () => {
      const { isLoading } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const getAllComments = async () => {
    await dispatch(getComments());
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      {isLoading ? <h2>Cargando...</h2> : <Comment />}
    </div>
  );
};

export default Comments;
