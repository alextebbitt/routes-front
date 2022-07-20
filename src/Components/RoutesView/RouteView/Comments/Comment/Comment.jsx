import React from "react";
import { useSelector } from "react-redux";

import {
  deleteComment,
  updateComment,
  getComments,
} from "../../../../../features/comments/commentsSlice";

const Comment = () => {
  const { comments } = useSelector((state) => state.comments);

  const comment = comments?.map((comment) => {
    return <div className="commentbody">{comment.body}</div>;
  });

  return <div>{comment}</div>;
};

export default Comment;
