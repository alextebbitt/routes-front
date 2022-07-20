import { Form, Radio, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateUser } from '../../../features/auth/authSlice';

const Questionnaire = ({ quest }) => {

  const [isSending, setIsSending] = useState(false);
  const dispatch = useDispatch();
  // IF WE CAN'T PASS QUESTIONNAIRE-DATA AS PROPS:
  // const { user } = useSelector((state) => state.auth);
  // const quest = user.user?.questionnaire;

  const handleFinish = async (values) => {
    setIsSending(true);
    await dispatch(updateUser({ questionnaire: values }));
    setIsSending(false);
  }

  return (
    <div>
      <h2>Cuestionario</h2>
      <Form
        labelCol={{ span: 4, }}
        wrapperCol={{ span: 14, }}
        initialValues={quest}
        onFinish={handleFinish}>
        <Form.Item label="Edad" name="age">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">0-18</Radio>
            <Radio value="2">18-35</Radio>
            <Radio value="3">35-45</Radio>
            <Radio value="4">+45</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Género" name="gender">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">Hombre</Radio>
            <Radio value="2">Mujer</Radio>
            <Radio value="3">Otro</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tiempo disponible" name="time">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">1-2h</Radio>
            <Radio value="2">3-4h</Radio>
            <Radio value="3">5-6h</Radio>
            <Radio value="4">7-8h</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tipo de ruta preferido" name="type">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">Histórica</Radio>
            <Radio value="2">Turística</Radio>
            <Radio value="3">Literaria</Radio>
            <Radio value="4">Patrimonial</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Coste preferido" name="cost">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">Gratis</Radio>
            <Radio value="2">1-50 €</Radio>
            <Radio value="3">+50 €</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Dificultad" name="difficulty">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">Alta</Radio>
            <Radio value="2">Baja</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Acompañamiento" name="company">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">Solo</Radio>
            <Radio value="2">Pareja</Radio>
            <Radio value="3">Familia</Radio>
            <Radio value="4">Amigos</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Transporte" name="transport">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="1">A pie</Radio>
            <Radio value="2">Bicicleta</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isSending}>
            Enviar
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="reset">
            Limpiar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Questionnaire
/*

Edad
0-18
18-35
35-45
+45

Género
Hombre
Mujer
Null

Tiempo?
1-2h
3-4h
5-6h
7-8h

Tipo preferido
Histórica
Turística
Literaria
Patrimonial

Coste dispuesto a pagar
Gratis
1-50 €
+50 €

Dificultad
Alta
Baja

Acompañamiento
Solo
Pareja
Familia

Transporte
A pie
Bicicleta


*/