import { Button, Checkbox, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { register, reset } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss"
import Video from "../Video/Video";

const Register = () => {
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  const [sending, setSending] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    if (isSuccess) {
      notification.success({ message: message });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    dispatch(reset());
  }, [isError, isSuccess, message]);

  const onFinish = async (values) => {
    setSending(true);
    await dispatch(register(values));
    setSending(false);
  };

  return (
    <div className="register">
      
      <div className="container">
        <div className="picture">
<Video/>
        </div>
       
      </div>
      <div className="registerForm">
      <Form
        className="form"
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: "Por favor, introduce tu nombre",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "No es un email válido",
            },
            {
              required: true,
              message: "Por favor, introduce tu email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: "Por favor, introduce tu contraseña",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirma contraseña"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Por favor, confirma tu contraseña",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Las contraseñas no coinciden")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Es necesario aceptar los términos")
                    ),
            },
          ]}
        >
          <Checkbox>
            He leído los <a href="">Términos y condiciones</a>
          </Checkbox>
        </Form.Item> */}
        <Form.Item>
          <Button  className="submitbtn" htmlType="submit">
            Crear cuenta
          </Button>
        </Form.Item>
      </Form>
      <span>
        ¿Ya tienes cuenta?<Link to="/login"> Conéctate</Link>
      </span>
      </div>
    </div>
  );
};

export default Register;
