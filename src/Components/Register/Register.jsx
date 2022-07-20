import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { updateUser } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

const Register = () => {
  const [sending, setSending] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    setSending(true);
    await dispatch(updateUser(values));
    setSending(false);
  };

  return (
    <>
      <img src="" height="80px" alt="logo"></img>
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
          tooltip="Este nombre o alias será visible"
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

        <Form.Item
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
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Resgistrarme
          </Button>
        </Form.Item>
      </Form>
      <span>
        ¿Ya tienes cuenta?<Link to="/login">Conéctate</Link>
      </span>
    </>
  );
};

export default Register;
