import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../Comments/Comment/Comment";
import { getComments } from "../../../../features/comments/commentsSlice";
import CommentForm from "../Comments/CommentForm/CommentForm";
import "./Comments.scss"
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { MessageOutlined } from "@ant-design/icons";
import BigSpin from "../../../BigSpin/BigSpin";

const Comments = ({ routeId }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  // const handleOk = () => {
  //   // setModalText('The modal will be closed after two seconds');
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setVisible(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setVisible(false);
  };

  const dispatch = useDispatch();

  const getAllComments = async () => {
    setIsLoading(true);
    await dispatch(getComments({ routeId, page: 1 }));
    setIsLoading(false);
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="comments">
      {isLoading ? <BigSpin /> : <>
        <div className="button"><button type="primary" className="reviewBtn" onClick={showModal}>
          Escribir una valoración
        </button></div>
        <Comment />

        <Modal
          title="¿Qué te ha parecido la ruta?"
          visible={visible}
          // onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[]}
        >
          <CommentForm visible={visible} setVisible={setVisible} routeId={routeId} />
        </Modal>

      </>

      }
    </div>
  );
};

export default Comments;
