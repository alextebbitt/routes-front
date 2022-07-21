import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../Comments/Comment/Comment";
import { getComments } from "../../../../features/comments/commentsSlice";
import CommentForm from "../Comments/CommentForm/CommentForm";

const Comments = ({routeId}) => {
      const { isLoading } = useSelector((state) => state.comments);
      
  const dispatch = useDispatch();

  const getAllComments = async () => {
    await dispatch(getComments({routeId, page: 1}));

  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div>
      <h1>Write a comment</h1>
      <CommentForm />
      <h1>Comments</h1>
      {isLoading ? <h2>Cargando...</h2> : <Comment />}
    </div>
  );
};

export default Comments;
