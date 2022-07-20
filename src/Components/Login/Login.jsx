import React from 'react'
import { Button, Form, Input } from "antd";
import { useDispatch } from 'react-redux';
import {  useNavigate,Link } from "react-router-dom";
import { login } from '../../features/auth/authSlice';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(login(values));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
    
  };

  return (
    <>
    <Form
      className="form"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    <span>
                ¿Todavía no  tienes cuenta?<Link to="/register">Regístrate</Link>
              </span>
    </>
  );
}

export default Login