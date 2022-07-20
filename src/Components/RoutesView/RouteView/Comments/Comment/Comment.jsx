import React from "react";
import { useSelector } from "react-redux";

import {
  deleteComment,
  updateComment,
  getComments,
} from "../../../../../features/comments/commentsSlice";

const Comment = () => {
  const { comments } = useSelector((state) => state.routes);

  const Comment = comments.map((comment) => {
    return <div className="commentbody">{comment.commentBody}</div>;
  });

  return <div>{Comment}</div>;
};

export default Comment;
