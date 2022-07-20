import React from "react";
import { useSelector } from "react-redux";
import {
  deleteComment,
  updateComment,
  getComments,
} from "../../../../../features/comments/commentsSlice";
import {
  HeartOutlined,
  HeartFilled,
  DeleteOutlined,
  EditOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Comment = () => {
  const { comments } = useSelector((state) => state.routes);

  const comment = comments.map((comment) => {
    return <div className="commentbody">{comment}</div>;
  });

  return <div>{comment}</div>;
};

export default Comment;
