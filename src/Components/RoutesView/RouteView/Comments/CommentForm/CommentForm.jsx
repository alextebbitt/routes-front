import React, { useState } from "react";
import "./CommentForm.scss";
import { Rate } from "antd";
import { useDispatch } from "react-redux";
import { Form, Input, Button, } from "antd";


const { TextArea } = Input;
const CommentForm = ({ routeId,visible,setVisible }) => {

const [loading, setLoading] = useState(false);
const [form] = Form.useForm();
  const [value, setValue] = useState(3);
  const dispatch = useDispatch();
  
  const onFinish = (values) => {
    console.log('Success:', values);
    setLoading(true)
    setTimeout(() => {
     
      console.log("timeout")
      form.resetFields();
      setVisible(false);
      setLoading(false);
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    < div className="modalBox">
<Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
  
    >

<Form.Item
        label="Username por hacer un ejemplo"
        name="Ejemplo"
      >
        <Input  rows={6} />
      </Form.Item>

      <Form.Item
      label="review"
            name="review"
          >
            <TextArea rows={6} placeholder={"Cuéntanos cómo te ha ido, qué te ha gustado más... si has tenido algún percance mientras visitabas los puntos de interés... ¡Estaremos encantados de responderte!"} />
           
          </Form.Item>
      <Form.Item name="rate2" label="Rate">
        <Rate   />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Enviar Valoración
        </Button>
      </Form.Item>
    </Form>
      </div>
  );
};

export default CommentForm;
