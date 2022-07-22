import { Form, Radio, Button, Slider, InputNumber } from 'antd';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateUser } from '../../../features/auth/authSlice';

const Questionnaire = ({ quest }) => {

  const [form] = Form.useForm();
  const [isSending, setIsSending] = useState(false);
  const dispatch = useDispatch();
  // IF WE CAN'T PASS QUESTIONNAIRE-DATA AS PROPS:
  // const { user } = useSelector((state) => state.auth);
  // const quest = user.user?.questionnaire;

  const handleReset = () => {
    form.setFieldsValue({
      age: undefined,
      gender: undefined,
      time: undefined,
      route_type: undefined,
      price: undefined,
      difficulty: undefined,
      companions: undefined,
      transport: undefined,
    })
  }

  const handleFinish = async (values) => {
    setIsSending(true);
    console.log(values)
    await dispatch(updateUser({ questionnaire: values }));
    setIsSending(false);
  }

  return (
    <div>
      <h2>Cuestionario</h2>
      <Form
        form={form}
        labelCol={{ span: 4, }}
        wrapperCol={{ span: 14, }}
        initialValues={quest}
        onFinish={handleFinish}>
        {/* <DatePicker onChange={handleYearChange} picker="year" /> */}
        <Form.Item label="Año de nacimiento" name="age">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Género" name="gender">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="Hombre">Hombre</Radio>
            <Radio value="Mujer">Mujer</Radio>
            <Radio value="Otro">Otro</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tiempo disponible" name="time">
          <Slider
            min={30}
            max={480}
            step={30}
            marks={{
              30: "30'",
              60: '1h',
              120: '2h',
              180: '3h',
              240: '4h',
              300: '5h',
              360: '6h',
              420: '7h',
              480: '8h',
            }}
          />
        </Form.Item>
        <Form.Item label="Tipo de ruta preferido" name="route_type">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="Histórica">Histórica</Radio>
            <Radio value="Turística">Turística</Radio>
            <Radio value="Literaria">Literaria</Radio>
            <Radio value="Patrimonial">Patrimonial</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Coste preferido" name="price">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="Gratis">Gratis</Radio>
            <Radio value="1-50">1-50 €</Radio>
            <Radio value="+50">+50 €</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Dificultad" name="difficulty">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="alta">Alta</Radio>
            <Radio value="baja">Baja</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Acompañamiento" name="companions">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="solo">Solo</Radio>
            <Radio value="pareja">Pareja</Radio>
            <Radio value="familia">Familia</Radio>
            <Radio value="amigos">Amigos</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Transporte" name="transport">
          <Radio.Group optionType="button" buttonStyle='solid'>
            <Radio value="A pie">A pie</Radio>
            <Radio value="Bicicleta">Bicicleta</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isSending}>
            Enviar
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="button" onClick={handleReset}>
            Limpiar
          </Button>
        </Form.Item>
      </Form>
      <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
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