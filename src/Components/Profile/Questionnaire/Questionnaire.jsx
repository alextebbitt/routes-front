import {Form, Radio} from 'antd';

const Questionnaire = () => {

  const handleFinish = async (values) => {
    console.log('Success:', values);
  }

  return (
    <div>
    <h2>Questionnaire</h2>
    <Form onFinish={handleFinish}>
      <Form.Item label="Edad">
        <Radio.Group optionType="button" buttonStyle='solid'>
          <Radio value="1">0-18</Radio>
          <Radio value="2">18-35</Radio>
          <Radio value="3">35-45</Radio>
          <Radio value="4">+45</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>

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