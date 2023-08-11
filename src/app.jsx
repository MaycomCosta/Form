import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { Input } from './components'
import * as C from './styles'

function App() {
  const initialValues = {
    nome: '',
    sobrenome: '',
    dataDeNascimento: '',
    endereço: '',
    cidade: '',
    email: '',
    celular: ''
  }

  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(3, 'O campo deve ter no mínimo 3 caracteres')
      .required('Campo obrigatório'),
    sobrenome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    dataDeNascimento: Yup.date()
      .max(new Date(), 'não é possivel incluir uma data futura')
      .required('Campo obrigatório'),
    celular: Yup.string()
      .max(13, 'O campo deve ter no máximo 13 caracteres ')
      .required('Campo obrigatório')
  })

  function handleSubmit(values, { setSubmitting }) {
    console.log(values)

    setSubmitting(false)
  }

  return (
    <C.Container>
      <C.Content>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, isSubmitting }) => (
            <Form style={{ width: '90%' }}>
              <C.Row>
                <Input name="nome" required />
                <Input name="sobrenome" required />
              </C.Row>

              <C.Row>
                <Input
                  name="dataDeNascimento"
                  type="date"
                  label="Data De Nascimento"
                  required
                />
                <Input name="naturalidade" required />
              </C.Row>

              <C.Row>
                <Input name="endereço" />
                <Input name="cidade" disabled={!values.endereço} />
              </C.Row>

              <C.Row>
                <Input name="email" type="email" required />
                <Input name="celular" type="number" required />
              </C.Row>
              <C.Footer>
                <C.Button>Salvar</C.Button>
              </C.Footer>
            </Form>
          )}
        </Formik>
      </C.Content>
      {/* <Input /> */}
    </C.Container>
  )
}

export default App
