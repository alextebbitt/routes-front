import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Comment, Rate, Tooltip } from "antd";
import moment from "moment";
import "./Comment.scss";
// import {
//   deleteComment,
//   updateComment,
//   getComments,
// } from "../../../../../features/comments/commentsSlice";

const Commenta = () => {
  const { comments } = useSelector((state) => state.comments);

  const comment = comments?.map((comment) => {
    // console.log("hey hey", comment.userId);
    // console.log("hey hey", comment.valoration);
    return (
      <div className="commentbody">
        <Comment
          author={<span>{comment.userId.name}</span>}
          avatar={
            <Avatar src={comment.userId.avatar} alt="Han Solo" />
          }
          content={<p>{comment?.body}</p>}
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Rate disabled defaultValue={comment.valoration} />
      </div>
    );
  });

  return (
    <div>
      <h3 className="h3title">Comentarios:</h3>
      {comment}
    </div>
  );
};

export default Commenta;
