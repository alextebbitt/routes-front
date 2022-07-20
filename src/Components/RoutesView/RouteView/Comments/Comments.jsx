import React from 'react'
import { useDispatch } from 'react-redux'
import Comments from "../Comments/Comment/Comment";
import {getComments,} from "../../../../../features/comments/commentsSlice";

const Comments = () => {
    const dispatch = useDispatch();

    const getAllComments = async () => {
        await dispatch(getComments());
    }

    useEffect(() => {
    getAllComments();
    }, [])
    
  return (
    <div>
      <h1>Comments</h1>
      {isLoading ?
      <h2>Cargando...</h2> :
     <Comments/>
      }
    </div>
  );
}

export default Comments