import React from 'react'
import { useDispatch } from 'react-redux'

const Comments = () => {
    const dispatch = useDispatch();

    const getAllComments = async () => {
        await dispatch(getComments());
    }
  return (
    <div>Comments</div>
  )
}

export default Comments