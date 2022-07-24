import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Comment, Rate, Tooltip } from "antd";
import moment from "moment";
import 'moment/locale/es';


const UserComment = () => {
  const { comments } = useSelector((state) => state.comments);

  const comment = comments?.map((comment) => {
    console.log(comments)
    return (
      <div className="commentbody" key={comment.id}>
        <Rate disabled defaultValue={comment.valoration} />
        <Comment
          author={<><span className="userName">{comment.userId.name}</span> — <span>{ moment(comment.createdAt).fromNow()}</span></>}
          avatar={
            <Avatar src={comment.userId.avatar} alt="User Name" />
          }
          content={<p className="userComment">{comment?.body}</p>}
        />
        
      </div>
    );
  });

  return (
    <div className="routeReview">
      {comment}
    </div>
  );
};

export default UserComment;
