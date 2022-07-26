import React, { useState } from "react";
import "./CommentForm.scss";
import { Rate } from "antd";
import { useDispatch } from "react-redux";
import { Form, Input, Button, } from "antd";
import { createComment } from "../../../../../features/comments/commentsSlice";
const { TextArea } = Input;

const CommentForm = ({ routeId, visible, setVisible }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    // console.log('Success:', values);
    setLoading(true)
    const newComment = {
      routeId,
      ...values
    };

    await dispatch(createComment(newComment))
    setTimeout(() => {
      form.resetFields();
      setVisible(false);
      setLoading(false);
    }, 1000);
  };

  return (
    < div className="modalBox">
      <Form form={form}
        initialValues={{ body: "", valoration: 3 }}
        name="basic"
        labelCol={{ span: 8, }}
        wrapperCol={{ span: 16, }}
        onFinish={onFinish}>
        <Form.Item
          label="Comentario"
          rules={[{
            required: true,
            message: "Es necesario escribir un comentario",
          },]}
          name="body">
          <TextArea rows={6} placeholder={"Cuéntanos cómo te ha ido, qué te ha gustado más... si has tenido algún percance mientras visitabas los puntos de interés..."} />
        </Form.Item>
        <Form.Item
<<<<<<< HEAD
          name="valoration"
          label="Puntuación"
          required={true}>
          <Rate />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <Button type="primary" htmlType="submit" loading={loading}>
=======

        >
          <Button className="valorarbtn" htmlType="submit" loading={loading}>
>>>>>>> develop
            Enviar Valoración
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CommentForm;
