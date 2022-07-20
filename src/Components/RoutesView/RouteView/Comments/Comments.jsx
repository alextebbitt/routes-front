import React from 'react'
import { useSelector } from 'react-redux'
import {
  HeartOutlined,
  HeartFilled,
  DeleteOutlined,
  EditOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Comments = () => {

const { comments } = useSelector(state => state.routes);

const comment = comments.map((comment) => {
return (
    <div className='commentbody'>{comment}</div>
)
})

  return (
    <div>{comments}</div>
  )
}

export default Comments