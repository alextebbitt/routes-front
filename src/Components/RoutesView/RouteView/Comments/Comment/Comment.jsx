import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Comment, Tooltip } from "antd";
import moment from "moment";
// import {
//   deleteComment,
//   updateComment,
//   getComments,
// } from "../../../../../features/comments/commentsSlice";

const Commenta = () => {
  const { comments } = useSelector((state) => state.comments);

  const comment = comments?.map((comment) => {
   console.log(comment)
    return (
      <div className="commentbody">
        <Comment
          author={<a>Han Solo</a>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={<p>{comment.body}</p>}
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        
      </div>
    );
  });

  return <div>{comment}</div>;
};

export default Commenta;
