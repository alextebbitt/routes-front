import { Form, Radio, Button, Slider, InputNumber, notification } from 'antd';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateUser } from '../../../features/auth/authSlice';

const Questionnaire = ({ quest, onClose }) => {

  const [form] = Form.useForm();
  const [isSending, setIsSending] = useState(false);
  const [visibleStep, setVisibleStep] = useState(0);
  const dispatch = useDispatch();

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
    });
    setVisibleStep(0);
  }

  const handleFinish = async (values) => {
    setIsSending(true);
    await dispatch(updateUser({ questionnaire: values }));
    notification.success({ message: 'Cuestionario enviado correctamente' });
    setVisibleStep(0);
    setIsSending(false);
    onClose();
  }

  return (
    <div>
      <p>Todas las preguntas son opcionales. Con tus respuestas podremos
        sugerirte las rutas más apropiadas para ti.</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type={visibleStep === 0 && "primary"}
          shape="circle" onClick={() => setVisibleStep(0)}>1</Button>
        &mdash;
        <Button type={visibleStep === 1 && "primary"}
          shape="circle" onClick={() => setVisibleStep(1)}>2</Button>
        &mdash;
        <Button type={visibleStep === 2 && "primary"}
          shape="circle" onClick={() => setVisibleStep(2)}>3</Button>
        &mdash;
        <Button type={visibleStep === 3 && "primary"}
          shape="circle" onClick={() => setVisibleStep(3)}>4</Button>
      </div>
      <Form
        form={form}
        labelCol={{ span: 4, }}
        wrapperCol={{ span: 14, }}
        initialValues={quest}
        onFinish={handleFinish}>
        <div style={{ border: "1px solid grey", padding: "10px", margin: "20px 0" }}>
          <Form.Item
            label="Año de nacimiento"
            hidden={visibleStep !== 0}
            name="age">
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Género"
            hidden={visibleStep !== 0}
            name="gender">
            <Radio.Group optionType="button" buttonStyle='solid'>
              <Radio value="Hombre">Hombre</Radio>
              <Radio value="Mujer">Mujer</Radio>
              <Radio value="Otro">Otro</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Tiempo disponible"
            hidden={visibleStep !== 1}
            name="time">
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
          <Form.Item
            label="Tipo de ruta preferido"
            hidden={visibleStep !== 1}
            name="route_type">
            <Radio.Group optionType="button" buttonStyle='solid'>
              <Radio value="Histórica">Histórica</Radio>
              <Radio value="Turística">Turística</Radio>
              <Radio value="Literaria">Literaria</Radio>
              <Radio value="Patrimonial">Patrimonial</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Coste preferido"
            hidden={visibleStep !== 2}
            name="price">
            <Radio.Group optionType="button" buttonStyle='solid'>
              <Radio value="Gratis">Gratis</Radio>
              <Radio value="1-50">1-50 €</Radio>
              <Radio value="+50">+50 €</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Dificultad"
            hidden={visibleStep !== 2}
            name="difficulty">
            <Radio.Group optionType="button" buttonStyle='solid'>
              <Radio value="Alta">Alta</Radio>
              <Radio value="Baja">Baja</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Acompañamiento"
            hidden={visibleStep !== 3}
            name="companions">
            <Radio.Group optionType="button" buttonStyle='solid'>
              <Radio value="Solo">Solo</Radio>
              <Radio value="Pareja">Pareja</Radio>
              <Radio value="Familia">Familia</Radio>
              <Radio value="Amigos">Amigos</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Transporte"
            hidden={visibleStep !== 3}
            name="transport">
            <Radio.Group optionType="button" buttonStyle='solid'>
              <Radio value="A pie">A pie</Radio>
              <Radio value="Bicicleta">Bicicleta</Radio>
            </Radio.Group>
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              disabled={visibleStep < 1}
              onClick={() => setVisibleStep(visibleStep - 1)}>
              Anterior
            </Button>
            <Button
              disabled={visibleStep > 2}
              onClick={() => setVisibleStep(visibleStep + 1)}>
              Siguiente
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item>
            <Button htmlType="button" onClick={handleReset}>
              Limpiar
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSending}>
              Enviar
            </Button>
          </Form.Item>
        </div>
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