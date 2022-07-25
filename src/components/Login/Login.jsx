import {React, useEffect} from 'react'
import { Button, Form, Input, notification } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate,Link } from "react-router-dom";
import { login, reset} from '../../features/auth/authSlice';

const Login = () => {
  const { isError, isSuccess, message} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

useEffect(() => {
  if (isError) {
    notification.error({message: "Error", description: message })
  }
  if (isSuccess) {
    notification.error({ message: "Exitoso", description: message });
  }
  dispatch(reset());
}, [isError, isSuccess, message])


  const onFinish = (values) => {
    dispatch(login(values));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
    
  };

  return (
    <>
      <img src="" height="80px" alt="logo"></img>
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
          rules={[
            {
              required: true,
              message: "¡Por favor introduce su correo electrónico!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            { required: true, message: "¡Por favor introduce su contraseña!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>

      <span>
        ¿Todavía no tienes cuenta?<Link to="/register">Regístrate</Link>
      </span>
    </>
  );
}

export default Login